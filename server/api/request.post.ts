import { defineEventHandler, readBody, setResponseStatus } from 'h3';
import parsePhoneNumber from 'libphonenumber-js';
import nodemailer from 'nodemailer';
import { boolean, getOutput, getPipeIssues, maxLength, minLength, object, safeParseAsync, string } from 'valibot';

import { useRuntimeConfig } from '#imports';

const FormRequestSchema = object({
	agree: boolean([
		(input) => {
			return input ? getOutput(input) : getPipeIssues('custom', 'Вы не дали согласие на обработку данных', input);
		}
	]),
	name: string('Имя должно быть строкой', [
		minLength(1, 'Введите имя'),
		maxLength(40, 'Имя перевышает максимальную длину')
	]),
	phone: string('Телефон должен быть строкой', [
		(input: string) => {
			const phoneNumber = parsePhoneNumber(input, 'RU');
			if (phoneNumber?.isValid()) {
				return getOutput(input);
			}
			return getPipeIssues('custom', 'Неверный формат номера телефона', input);
		}
	])
});
export default defineEventHandler(async (event) => {
	try {
		const body = (await readBody(event)) as { name: string; phone: string };
		const result = await safeParseAsync(FormRequestSchema, body, { abortEarly: false });
		if (!result.success) {
			const errors = result.issues.map((item) => {
				return [item.path?.at(0)?.key, item.message];
			});
			setResponseStatus(event, 400);
			return { response: 'error', errors: Object.fromEntries(errors) };
		}
		const {
			mail: { smtp, requestForm }
		} = useRuntimeConfig();

		const transporter = nodemailer.createTransport({
			host: smtp.host,
			port: smtp.port,
			secure: true,
			auth: {
				user: smtp.auth.user,
				pass: smtp.auth.password
			}
		});

		const template = `<span>Имя:  ${body.name}  </span><br>
				<span> Телефон:  ${body.phone}  </span><br>`;
		await transporter.sendMail({
			to: requestForm.to,
			from: smtp.auth.user,
			subject: 'Контактная форма',
			html: template
		});
		return {
			response: 'ok'
		};
	} catch (e: unknown) {
		setResponseStatus(event, 503);
		// @ts-ignore
		return { response: 'error', errors: { server: e?.message ?? 'Unknown error' } };
	}
});
