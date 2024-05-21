import { Cemjsx, front, Fn, Static, Func } from "cemjs-all";
import lock from "@svg/modalRegistration/lock.svg";
import eye from "@svg/modalRegistration/eye.svg";
import eyeSlash from "@svg/modalRegistration/eye-slash.svg";
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import leveGray from "@svg/lenta/level_gray.svg";

export default function () {
  //     Fn.log('=0b439c=', Static.form.change_pass)
  // Fn.log('isValid', Static.form.change_pass.pass.valid)
  return (
    <div class="ml-0 w-full @992:ml-[2.5rem] @992:w-[76.25rem]">
      <div>
        <div class="w-full px-0 py-[1.875rem] [border-bottom:1px_solid_#31374A] first:pb-[.625rem] first:pt-0 @600:w-[21.875rem]">
          <h2 class="text-[1rem] font-semibold">Пароль</h2>
          <h3 class="mb-[.5rem] text-[calc(1.3rem_+_0.6vw)] font-medium">
            Изменить пароль
          </h3>
          <div class="mx-auto my-0 flex flex-col pb-[1.5625rem]">
            <label class="mb-[.75rem] text-[1rem] font-normal text-[#9ca2b5]">
              Старый пароль
            </label>
            <span
              style={
                Static.form.change_pass?.pass?.error === false
                  ? "display: none"
                  : "display: block; color: #E84142;"
              }
            >
              {Static.form.change_pass?.pass?.error}
            </span>
            <div class="relative block h-[3.75rem] w-full overflow-hidden whitespace-nowrap rounded-[.625rem] bg-[#313543] text-[--white] outline-none [border:1px_solid_#44495C]">
              <img
                class="absolute left-[1.25rem] top-[50%] w-[1.25rem] translate-y-[-50%] [filter:invert(64%)_sepia(8%)_saturate(739%)_hue-rotate(189deg)_brightness(94%)_contrast(91%)]"
                src={lock}
              />
              <input
                class="h-full w-full bg-[#313543] pl-[3.125rem] text-[--white] [border:1px_solid_#44495c]"
                maxlength="16"
                minlength="8"
                type={Static.form.change_pass?.pass?.view ? "text" : "password"}
                style={
                  Static.form.change_pass?.pass?.error === true &&
                  Static.form.change_pass?.pass?.value.length > 0
                    ? "border-color: green"
                    : ""
                }
                placeholder={Static.form.change_pass?.pass?.placeholder}
                oninput={(e: any) => {
                  Static.form.change_pass.pass.value = e.target.value;
                  if (Static.form.change_pass?.pass?.value?.length >= 8) {
                    Static.form.change_pass.pass.valid = true;
                  } else {
                    Static.form.change_pass.pass.valid = false;
                  }

                  // front.Services.functions.formPassword(Static.form.change_pass.pass)
                  Func.checkForm("change_pass");
                }}
              />
              <img
                class="absolute right-[1.25rem] top-[50%] translate-y-[-50%] cursor-pointer [filter:invert(64%)_sepia(8%)_saturate(739%)_hue-rotate(189deg)_brightness(94%)_contrast(91%)]"
                src={Static.form.change_pass?.pass?.view ? eyeSlash : eye}
                onclick={() => {
                  Static.form.change_pass.pass.view =
                    !Static.form.change_pass?.pass?.view;
                }}
              />
            </div>
          </div>

          <div class="mx-auto my-0 flex flex-col pb-[1.5625rem]">
            <label class="mb-[.75rem] text-[1rem] font-normal text-[#9ca2b5]">
              Новый пароль
            </label>
            <span
              style={
                Static.form.change_pass?.new_pass?.error === false
                  ? "display: none"
                  : "display: block; color: #E84142;"
              }
            >
              {Static.form.change_pass?.new_pass?.error}
            </span>
            <div class="relative block h-[3.75rem] w-full overflow-hidden whitespace-nowrap rounded-[.625rem] bg-[#313543] text-[--white] outline-none [border:1px_solid_#44495C]">
              <img
                class="absolute left-[1.25rem] top-[50%] w-[1.25rem] translate-y-[-50%] [filter:invert(64%)_sepia(8%)_saturate(739%)_hue-rotate(189deg)_brightness(94%)_contrast(91%)]"
                src={lock}
              />
              <input
                class="h-full w-full bg-[#313543] pl-[3.125rem] text-[--white] [border:1px_solid_#44495c]"
                maxlength="16"
                minlength="8"
                type={
                  Static.form.change_pass?.new_pass?.view ? "text" : "password"
                }
                style={
                  Static.form.change_pass?.new_pass?.error ==
                  "Слишком легкий пароль"
                    ? "border-color: red"
                    : Static.form.change_pass?.new_pass?.value?.length > 0
                      ? "border-color: green"
                      : null
                }
                placeholder={Static.form.change_pass?.new_pass?.placeholder}
                oninput={(e: any) => {
                  Static.form.change_pass.new_pass.value = e.target.value;
                  Static.form.change_pass.error = false;
                  front.Services.functions.formPassword(
                    Static.form.change_pass.new_pass,
                  );
                  Func.checkForm("change_pass");
                }}
              />
              <img
                class="absolute right-[1.25rem] top-[50%] translate-y-[-50%] cursor-pointer [filter:invert(64%)_sepia(8%)_saturate(739%)_hue-rotate(189deg)_brightness(94%)_contrast(91%)]"
                src={Static.form.change_pass?.new_pass?.view ? eyeSlash : eye}
                onclick={() => {
                  Static.form.change_pass.new_pass.view =
                    !Static.form.change_pass?.new_pass?.view;
                }}
              />
            </div>
          </div>

          <button
            style="width: 100%"
            class={
              Static.form.change_pass?.isValid === true
                ? "btn"
                : "btn cursor-default text-[#BEBEBE] [filter:grayscale(1)]"
            }
            onclick={async () => {
              // console.log("1`23");

              if (!Static.form.change_pass.isValid) return;

              let answer = await front.Services.functions.sendApi(
                `/api/MyInfo`,
                {
                  action: "changePassword",
                  password: Static.form.change_pass.pass.value,
                  newPassword: Static.form.change_pass.new_pass.value,
                },
              );

              if (answer.error) {
                Static.form.change_pass.isValid = false;
                Static.form.change_pass.error = "Неверно введены данные!";
                alert(answer.error);
                return;
              }
            }}
          >
            <span style="text-decoration: none; text-transform: uppercase;">
              применить
            </span>
          </button>
        </div>
        <div class="w-full px-0 py-[1.875rem] [border-bottom:1px_solid_#31374A] first:pb-[.625rem] first:pt-0 @600:w-[21.875rem]">
          <p class="mb-[1rem] text-[1.125rem] font-semibold">
            Вы можете удалить свой профиль
          </p>
          <div class="profile-settings__delete_user">
            <button
              class="btn btn_gradient"
              style="width: 100%"
              onclick={async () => {
                let answer = await front.Services.functions.sendApi(
                  `/api/MyInfo`,
                  { action: "deleteAccount" },
                );

                if (answer.error) {
                  alert(answer.error);
                  return;
                }
              }}
            >
              <span style="text-decoration: none;text-transform: uppercase;">
                удалить профиль
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
