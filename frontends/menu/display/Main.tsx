import { Cemjsx, Fn, front } from "cemjs-all";
import cem from "@svg/cem.svg";

export default function () {
	return (
		<div class="max-w-4xl mx-auto">
			<ul class="px-4 py-3 flex w-full justify-between relative">
				<li>
					<a
						class="relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/");
						}}>
						<img src={cem} alt="Главная страница" class="w-[1.8rem]" />
					</a>
				</li>
				<li>
					<a
						class="relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/lenta");
						}}>
						<i class={["i", `i-lenta`, `text-2xl`]}></i>
					</a>
				</li>
				<li>
					<a
						class="relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/messanger");
						}}>
						<i class={["i", `i-messanger`, `text-2xl`]}></i>
					</a>
				</li>
				<li>
					<a
						class="relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
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
						<i class={["i", `i-add`, `text-2xl`]}></i>
					</a>
				</li>
				<li>
					<a
						class="relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
						onclick={() => {
							Fn.linkChange("/questions");
						}}>
						<i class={["i", `i-qa`, `text-2xl`]}></i>
					</a>
				</li>
				<li
					class="relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
					onclick={() => {
						Fn.initOne("modalAuthtorization", {});
					}}>
					<i class={["i", `i-notice-empty`, `text-2xl`]}></i>
				</li>
				<li class="relative flex justify-center items-center rounded-full text-white w-[3rem] h-[3rem] cursor-pointer"
					onclick={() => Fn.initOne("sidebar", {})}>
					<i class="i i-burger text-2xl"></i>
				</li>
			</ul>
		</div>
	);
}
