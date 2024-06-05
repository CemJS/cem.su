import { Cemjsx, Static, Fn, Func, front } from "cemjs-all";

const RenderFieldTextarea = function ({ about }) {
  return (
    <div
      class={[
        "modalWindow_field",
        "mt-[15px]",
        "modalWindow_field-textarea",
        "modalWindow_field__valid",
      ]}
    >
      <textarea
        rows="3"
        oninput={(e: any) => {
          about = e.target.value;
        }}
      >
        {about}
      </textarea>
    </div>
  );
};

const RenderField = function ({ field, placeholder, className }) {
  return (
    <div
      class={[
        "modalWindow_field",
        `${className}`,
        field.length ? "modalWindow_field__valid" : null,
      ]}
    >
      <input
        type="text"
        value={field}
        autocomplete="off"
        oninput={(e: any) => {
          field.email.value = e.target.value;
        }}
      />
      <div class="modalWindow_field_labelLine">
        <i class="i i-user"></i>
        <span>{placeholder}</span>
      </div>
    </div>
  );
};

const RenderFieldCountry = function ({ country, placeholder, className }) {
  return (
    <div
      class={[
        "modalWindow_field",
        `${className}`,
        "modalWindow_field__valid",
        "modalWindow_field__disabled",
      ]}
    >
      <span class="modalWindow_field_span">{`${country.engName} (${country.origName})`}</span>
      <div class="modalWindow_field_labelLine">
        <i class="i i-user"></i>
        <span>{placeholder}</span>
      </div>
      <span
        class="modalWindow_field__edit"
        onclick={() => {
          Fn.initOne("modalCountry", {
            callback: (chooseCountry) => {
              if (!chooseCountry) return;

              country.origName = chooseCountry.origName;
              country.engName = chooseCountry.engName;
            },
          });
        }}
      >
        <i class="i i-edit"></i>
      </span>
    </div>
  );
};

export default function () {
  return (
    <main id="modal_main">
      <div class="pY-15 modal_scroll">
        <h3>{front.Variable?.words?.user?.aboutMe}</h3>
        <RenderFieldTextarea about={Static.information.about} />
        <RenderField
          field={Static.fullName}
          placeholder={front.Variable?.words?.user?.fullName}
          className="mt-30"
        />
        <RenderField
          field={Static.information.speciality}
          placeholder={front.Variable?.words?.user?.specialization}
          className="mt-30"
        />
        <RenderField
          field={front.Services.functions.timeStampToDate(
            Static.information.birthday,
            ".",
          )}
          placeholder={front.Variable?.words?.user?.dateBirthday}
          className="mt-30 modalWindow_field__disabled"
        />
        <RenderField
          field={Static.information.city}
          placeholder={front.Variable?.words?.country?.city}
          className="mt-30"
        />
        <RenderFieldCountry
          country={Static.country}
          placeholder={front.Variable?.words?.country?.title}
          className="mt-[25px]"
        />
      </div>
    </main>
  );
}
