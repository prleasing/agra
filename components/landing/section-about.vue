<script setup lang="ts">
import { Icons24ProgressCheck } from '#icons';
import { computed } from '#imports';
import BaseSection from '~/components/base-section';
import BaseIcon from '~/components/elements/base-icon';
import BasePicture from '~/components/elements/base-picture';

interface People {
	surname: string;
	name: string;
	job: string;
}
const commands = computed<People[]>(() => {
	return [
		{
			surname: 'Фазлыев',
			name: 'Ришат',
			job: 'Генеральный директор'
		},
		{
			surname: 'Ишбулатова',
			name: 'Раиля',
			job: 'Зам. генерального директора по развитию'
		},
		{
			surname: 'Мясников',
			name: 'Андрей',
			job: 'Заведующий фермой'
		}
	];
});
</script>

<template>
	<base-section title="О нашей компании" class="section-about">
		<div class="messages">
			<div class="message">
				<div class="message__bubble"><p>Когда была основана компания?</p></div>
			</div>
			<div class="message">
				<div class="message__bubble"><p>Дата создания компании - сентябрь 2022 г.</p></div>
			</div>
			<div class="message">
				<div class="message__bubble"><p>А где находится ПР-Агро?</p></div>
			</div>
			<div class="message">
				<div class="message__bubble">
					<p>Основана на базе ранее действовавшего небольшого хозяйства в Иглинском районе.</p>
				</div>
				<nuxt-link class="message__link" href="//go.2gis.com/aft4n" target="_blank">Ссылка на 2гис</nuxt-link>
			</div>
			<div class="message">
				<div class="message__bubble"><p>Как обстоят дела на данный момент?</p></div>
			</div>
			<div class="message">
				<div class="message__bubble">
					<p>
						За&nbsp;период существования с&nbsp;момента приобретения хозяйства, произведены масштабные работы
						по&nbsp;восстановлению ферм, облагораживанию территории, вводу ранее необрабатываемых полей
						в&nbsp;севооборот, закуплена новая техника и&nbsp;племенное стадо и&nbsp;пр. виды работ.
					</p>
				</div>
			</div>
		</div>
		<div class="about">
			<h3>А что ещё вы можете узнать о ПР-Агро?</h3>
			<p>
				&laquo;Пр-Агро&raquo;&nbsp;&mdash; это динамично развивающаяся компания, специализирующаяся<br />
				на&nbsp;животноводстве и&nbsp;растениеводстве.
			</p>

			<p>
				Мы&nbsp;гордимся тем, что контролируем весь процесс от&nbsp;посева до&nbsp;уборки, обеспечивая высокое качество
				наших продуктов.
			</p>
		</div>
		<div class="mission">
			<div class="mission__content">
				<span><base-icon :icon="Icons24ProgressCheck" /> Наша миссия</span>
				<p>
					Обеспечить здоровое и&nbsp;питательное питание для наших клиентов,<br />
					используя самые передовые методы и&nbsp;технологии в&nbsp;сельском хозяйстве
				</p>
			</div>
			<base-picture src="/images/landing/home/about.jpg" :height="152" :width="261" alt="" />
		</div>
		<hr />
		<div class="peoples">
			<div v-for="(people, index) in commands" :key="index" class="people">
				<base-picture
					class="people__cover"
					:alt="`${people.surname} ${people.name}`"
					:height="300"
					:width="379"
					:src="`/images/landing/home/peoples/${index + 1}.jpg`"
				/>
				<h4 class="people__title">
					{{ people.surname }}<br />
					{{ people.name }}
				</h4>
				<p class="people__job">{{ people.job }}</p>
			</div>
		</div>
	</base-section>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';

.section-about {
	:deep(.section-content) {
		display: grid;
		gap: #{utility.rem(24)};

		.messages + .about {
			margin-top: #{utility.rem(64 - 24)};
		}
	}
}

.messages {
	display: grid;
	gap: #{utility.rem(42)};

	.message:nth-child(odd) {
		display: flex;
		justify-content: flex-end;

		.message__bubble {
			background-color: var(--brand);
			color: #fff;
		}
	}
}

.message {
	display: grid;
	gap: #{utility.rem(8)};
	justify-items: start;

	& &__bubble,
	& &__link {
		padding: #{utility.rem(16)} #{utility.rem(24)};
		border-radius: #{utility.rem(12)};
		color: #1d2939;
		font-weight: 500;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
	}

	& &__bubble {
		max-width: #{utility.rem(775)};
		background: #eaecf0;
	}

	& &__link {
		border: 1px solid #eaecf0;
		text-decoration: none;
		transition:
			color 200ms ease-in-out,
			background-color 200ms ease-in-out,
			border 200ms ease-in-out;

		@include utility.has-hover {
			border-color: var(--brand);
			background-color: var(--brand);
			color: #fff;
		}
	}
}

.about {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: #{utility.rem(24)} #{utility.rem(16)};

	h3 {
		grid-column: 1/-1;
		color: #1d2939;
		font-weight: 700;
		font-style: normal;
		font-size: #{utility.rem(48)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.96)};
	}

	p {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
	}
}

.mission {
	display: flex;
	gap: #{utility.rem(13)};
	justify-content: space-between;
	padding: #{utility.rem(0)};
	border: 1px solid rgb(41 161 62 / 16%);
	border-radius: #{utility.rem(16)};
	background: #fbfdfc;

	& &__content {
		display: grid;
		gap: #{utility.rem(24)};
		padding: #{utility.rem(24)} 0 #{utility.rem(24)} #{utility.rem(24)};

		> span {
			display: flex;
			gap: #{utility.rem(8)};
			color: var(--brand);
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(18)};
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.26)};

			.icon {
				width: #{utility.rem(24)};
			}
		}
	}

	p {
		color: var(--brand);
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
	}

	.picture {
		:deep(img) {
			width: #{utility.rem(261)};
			height: #{utility.rem(152)};
			border-radius: #{utility.rem(16)};
		}
	}
}

hr {
	height: 1px;
	border: 0;
	border-radius: #{utility.rem(16)};
	background-color: #eaecf0;
}

.peoples {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: #{utility.rem(16)};
}

.people {
	display: grid;
	gap: #{utility.rem(8)};

	&__cover {
		margin-bottom: #{utility.rem(8)};

		:deep(img) {
			width: #{utility.rem(379)};
			height: #{utility.rem(300)};
			border-radius: #{utility.rem(24)};
		}
	}

	& &__title {
		color: var(--brand);
		font-weight: 600;
		font-style: normal;
		font-size: #{utility.rem(32)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.64)};
	}

	& &__job {
		color: #667085;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.54)};
	}
}
</style>
