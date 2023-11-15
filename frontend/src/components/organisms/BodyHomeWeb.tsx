export default function BodyHomeWeb() {
  return (
    <div className="px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            IPC Alumni Bike
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div>
              <a
                href="/home-keykeeper"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book a Bike
              </a>
            </div>
            <div className="disable-link">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-slate-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
