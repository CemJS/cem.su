import { Cemjsx, Func, Static } from "cemjs-all";

export default function () {
  return (
    // <div class="notice_content">
    //   <div class="notice_icon">
    //     {Static.icon ? <img src={Static.icon} alt={Static.title} /> : null}
    //   </div>
    //   <div class="notice_message">
    //     {Static.title ? <span>{Static.title}</span> : null}
    //     <span>{Static.text}</span>
    //   </div>
    // </div>
    <div
      id="alert-additional-content-1"
      class="mb-4 rounded-lg border border-blue-300 bg-blue-50 p-4 text-blue-800 dark:border-blue-800 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <div class="flex items-center">
        <svg
          class="me-2 h-4 w-4 flex-shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <h3 class="text-lg font-medium">
          {Static.title ? Static.title : null}
        </h3>
      </div>
      <div class="mb-4 mt-2 text-sm">{Static.text}</div>
      <div class="flex">
        {/* <button
          type="button"
          class="me-2 inline-flex items-center rounded-lg bg-blue-800 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="me-2 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          View more
        </button> */}
        <button
          type="button"
          class="rounded-lg border border-blue-800 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-800 hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
          data-dismiss-target="#alert-additional-content-1"
          aria-label="Close"
          onclick={Func.close}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
