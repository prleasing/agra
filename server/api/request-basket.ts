import { defineEventHandler, readBody, setResponseStatus } from 'h3';
import parsePhoneNumber from 'libphonenumber-js';
import nodemailer from 'nodemailer';
import {
	array,
	boolean,
	getOutput,
	getPipeIssues,
	maxLength,
	minLength,
	number,
	object,
	safeParseAsync,
	string
} from 'valibot';

import { useRuntimeConfig } from '#imports';
import type { Basket } from '~/components/landing/the-basket-product';
import { formatter } from '~/utils/formatter.ts';

const styleBorder = `border: 1px solid black;`;
const styleCollapse = `border-collapse: collapse;`;
const center = `text-align: center;`;
const padding = `padding: 8px;`;

const FormRequestSchema = object({
	items: array(
		object({
			title: string('Название должно быть строкой', [
				minLength(1, 'Введите имя'),
				maxLength(40, 'Имя перевышает максимальную длину')
			]),
			count: number('Количество должно быть числом'),
			measure: string('Мера должно быть строкой'),
			sum: number('Сумма должна быть числом')
		}),
		'Нужно чтобы был массив',
		[minLength(1, 'В корзине ничего нет, выберите продукт')]
	),
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
		const body = (await readBody(event)) as { name: string; phone: string; items: Basket[] };
		// const title = body.items.map((item) => item.title);
		// const count = body.items.map((item) => item.count);
		// const measure = body.items.map((item) => item.measure);
		const result = await safeParseAsync(FormRequestSchema, body, { abortEarly: false });
		const temp = body.items
			.map(
				(item) =>
					`<tr> <td style="${styleBorder}${styleCollapse}${center}${padding}">${
						item.title
					}</td> <td style="${styleBorder}${styleCollapse}${center}${padding}">${formatter(
						item.count,
						item.measure
					)}</td>
					<td style="${styleBorder}${styleCollapse}${center}${padding}">${item.sum}₽</td></tr><br>`
			)
			.join('');
		console.log(result);
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
				<span> Телефон:  ${body.phone}  </span><br>
				<table style="border: 1px solid black; test-align: center">
				<tr><td style="${styleBorder}${styleCollapse}${center}${padding}">Название</td><td style="${styleBorder}${styleCollapse}${center}${padding}">Количество</td><td style="${styleBorder}${styleCollapse}${center}${padding}">Сумма</td></tr><br> 
				${temp}<br>
				</table>`;
		await transporter.sendMail({
			to: requestForm.to,
			from: smtp.auth.user,
			subject: 'Новая заявка',
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
