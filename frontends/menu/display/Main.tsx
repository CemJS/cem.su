import { Cemjsx, Fn, front } from "cemjs-all";
import cem from "@svg/cem.svg";

export default function () {
	return (
		<div class="wrapper">
			<ul class="menu-inner flex w-full justify-between relative">
				<li>
					<a
						class="menu__item relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/");
						}}>
						<img src={cem} alt="Главная страница" class="w-[1.8rem]" />
						<span class="menu__item-name absolute whitespace-nowrap font-medium">Главная</span>
					</a>
				</li>
				<li>
					<a
						class="menu__item relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/lenta");
						}}>
						<i class={["i", `i-lenta`]}></i>
						<span class="menu__item-name absolute whitespace-nowrap font-medium">Лента</span>
					</a>
				</li>
				<li>
					<a
						class="menu__item relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/messanger");
						}}>
						<i class={["i", `i-messanger`]}></i>
						<span class="menu__item-name absolute whitespace-nowrap font-medium">Сообщения</span>
					</a>
				</li>
				<li>
					<a
						class="menu__item relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={(e) => {
							if (!front.Variable.Auth) {
								e.preventDefault();
								Fn.initOne("modalAuthtorization", {});
							} else {
								Fn.initOne("modalTools", {
									records: [
										{
											name: "Опубликовать пост",
											func: () => Fn.linkChange("/profile/public/posts"),
										},
										{
											name: "Задать вопрос",
											func: () => Fn.linkChange("/profile/public/question"),
										},
									],
								});
							}
						}}>
						<i class={["i", `i-add`]}></i>
						<span class="menu__item-name absolute whitespace-nowrap font-medium">Опубликовать</span>
					</a>
				</li>
				<li>
					<a
						class="menu__item relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/questions");
						}}>
						<i class={["i", `i-qa`]}></i>
						<span class="menu__item-name absolute whitespace-nowrap font-medium">Вопросы и ответы</span>
					</a>
				</li>
				<li
					class="menu__item relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
					onclick={() => {
						Fn.initOne("modalAuthtorization", {});
					}}>
					<i class={["i", `i-notice-empty`]}></i>
					<span class="menu__item-name absolute whitespace-nowrap font-medium">Уведомления</span>
				</li>
				<li class="menu__item relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
					onclick={() => Fn.initOne("sidebar", {})}>
					<i class="i i-burger"></i>
					<span class="menu__item-name absolute whitespace-nowrap font-medium">Меню</span>
				</li>
			</ul>
		</div>
	);
}
