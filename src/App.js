import React from "react";
import Navbar from "./containers/Navbar";
import { Helmet } from "react-helmet";
import Hero from "./containers/Hero";
import Coints from "./containers/Coints";
function App() {
  return (
    <div className="App">
      <Helmet>
        <script src="assets/js/theme.min.js"></script>
      </Helmet>
      <div>
        <Navbar />
        <Hero />
        <Coints />
        <section className="py-24 bg-slate-500/10 relative" data-aos="fade-up">
          <div className="absolute top-0 inset-x-0 hidden sm:block">
            <img
              src="assets/images/shapes/white-wave.svg"
              alt="svg"
              className="w-full -scale-x-100"
            />
          </div>
          <div className="container relative">
            <div className="text-center">
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                Why Choose Us
              </span>
              <h1 className="text-3xl font-medium my-3">
                The most trusted way to buy or sell crypto currency
              </h1>
              <p className="text-slate-400 mt-5 mb-4">
                Here are the few reasons why you should choose us
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-14">
              <div className="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
                <div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                    <svg
                      className="w-7 h-7 text-primary"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                          id="Path-50"
                          fill="currentcolor"
                          opacity="0.3"
                        />
                        <path
                          d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
                          id="check-path"
                          fill="currentcolor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <h5 className="text-base font-semibold">
                    Secure &amp; Encrypted Transactions
                  </h5>
                  <p className="text-slate-600 mt-2">
                    Advanced payment and processing technologies, fine-tuned
                    from more than 3 years development
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
                <div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                    <svg
                      className="w-7 h-7 text-primary"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <rect
                          id="Combined-Shape"
                          fill="currentcolor"
                          opacity="0.3"
                          x={2}
                          y={5}
                          width={20}
                          height={14}
                          rx={2}
                        />
                        <rect
                          id="Rectangle-59"
                          fill="currentcolor"
                          x={2}
                          y={8}
                          width={20}
                          height={3}
                        />
                        <rect
                          id="Rectangle-59-Copy"
                          fill="currentcolor"
                          opacity="0.3"
                          x={16}
                          y={14}
                          width={4}
                          height={2}
                          rx={1}
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <h5 className="text-base font-semibold">Transparent Fees</h5>
                  <p className="text-slate-600 mt-2">
                    Barbelless catfish pelican gulper candlefish thornfishGulf
                    menhaden ribbonbearer riffle.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
                <div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                    <svg
                      className="w-7 h-7 text-primary"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <rect
                          id="Combined-Shape"
                          fill="currentcolor"
                          opacity="0.3"
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={10}
                        />
                        <path
                          d="M6.16794971,14.5547002 C5.86159725,14.0951715 5.98577112,13.4743022 6.4452998,13.1679497 C6.90482849,12.8615972 7.52569784,12.9857711 7.83205029,13.4452998 C8.9890854,15.1808525 10.3543313,16 12,16 C13.6456687,16 15.0109146,15.1808525 16.1679497,13.4452998 C16.4743022,12.9857711 17.0951715,12.8615972 17.5547002,13.1679497 C18.0142289,13.4743022 18.1384028,14.0951715 17.8320503,14.5547002 C16.3224187,16.8191475 14.3543313,18 12,18 C9.64566871,18 7.67758127,16.8191475 6.16794971,14.5547002 Z"
                          id="Path-56"
                          fill="currentcolor"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <h5 className="text-base font-semibold">Easy to Use</h5>
                  <p className="text-slate-600 mt-2">
                    Asiatic glassfish pilchard sandburrower, orangestriped
                    triggerfish hamlet Molly Miller dogfish!
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-white p-5 rounded-md shadow-slate-300">
                <div>
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                    <svg
                      className="w-7 h-7 text-primary"
                      viewBox="0 0 24 24"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect id="bound" x={0} y={0} width={24} height={24} />
                        <path
                          d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z"
                          id="Path-76"
                          fill="currentcolor"
                        />
                        <path
                          d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z"
                          id="Combined-Shape"
                          fill="currentcolor"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <h5 className="text-base font-semibold">Easy to Use</h5>
                  <p className="text-slate-600 mt-2">
                    Asiatic glassfish pilchard sandburrower, orangestriped
                    triggerfish hamlet Molly Miller dogfish!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =========== features Section End =========== */}
        {/* =========== Integration Section Start =========== */}
        <section className="py-24" data-aos="fade-up">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-6">
              <div className="lg:me-20">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-md">
                  <svg
                    className="w-7 h-7 text-primary"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect id="bound" x={0} y={0} width={24} height={24} />
                      <path
                        d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z"
                        id="Combined-Shape"
                        fill="currentcolor"
                      />
                      <rect
                        id="Rectangle-28"
                        fill="currentcolor"
                        opacity="0.3"
                        transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) "
                        x={11}
                        y={4}
                        width={2}
                        height={16}
                        rx={1}
                      />
                    </g>
                  </svg>
                </div>
                <h1 className="sm:text-3xl text-xl font-medium my-3">
                  Easy to Integrate - SDK
                </h1>
                <p className="text-slate-500 mt-5 mb-4">
                  Maecenas blandit aliquam sem, auctor accumsan mauris finibus
                  pellentesque. In vestibulum ac nunc ut rutrum. Donec mollis
                  viverra magna vel tincidunt.
                </p>
                <p className="text-slate-500 mt-5 mb-4">
                  Ut faucibus libero non tortor commodo, ac faucibus lectus
                  fermentum. Sed sit amet ornare turpis, ac lobortis urna.
                </p>
                <div className="flex flex-wrap items-center gap-5 mt-12">
                  <a
                    href="#"
                    className="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
                  >
                    Explore the SDK
                  </a>
                  <a
                    href="#"
                    className="py-3 px-6 rounded border-primary/5 text-primary bg-primary/5 hover:border-primary hover:bg-primary/10 hover:shadow hover:shadow-primary transition-all duration-500"
                  >
                    Documentation
                  </a>
                </div>
              </div>
              <div>
                <img
                  src="assets/images/other/code.jpg"
                  className="lg:mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* =========== Integration Section End =========== */}
        {/* =========== Stats Section Start =========== */}
        <section className="py-24 bg-slate-500/10 relative" data-aos="fade-up">
          <div className="absolute top-0 inset-x-0 hidden sm:block">
            <img
              src="assets/images/shapes/white-wave.svg"
              alt="svg"
              className="w-full -scale-x-100"
            />
          </div>
          <div className="container relative">
            <div className="text-center">
              <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                Stats
              </span>
              <h1 className="text-3xl font-medium my-3">Prompt In Numbers</h1>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-12">
              <div className="text-center">
                <span className="text-3xl">$50M+</span>
                <p className="font-semibold mt-3">Value transacted</p>
                <p className="text-slate-800 mt-1">
                  in overall sell/buy transactions
                </p>
              </div>
              <div className="text-center">
                <span className="text-3xl">2.1M+</span>
                <p className="font-semibold mt-3">Transactions Processed</p>
                <p className="text-slate-800 mt-1">across 10+ countries</p>
              </div>
              <div className="text-center">
                <span className="text-3xl">2M+</span>
                <p className="font-semibold mt-3">Satisfied Processed</p>
                <p className="text-slate-800 mt-1">across 100+ locations</p>
              </div>
              <div className="text-center">
                <span className="text-3xl">4.5</span>
                <p className="font-semibold mt-3">Star App Rating</p>
                <p className="text-slate-800 mt-1">
                  on google play &amp; apple store
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* =========== Stats Section End =========== */}
        {/* =========== Blog Section Start =========== */}
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-medium my-3">Useful Reading</h1>
              <p className="text-slate-500 mt-5 mb-4">
                Few articles to read to know more about cryptocurrency
              </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
              <div>
                <div
                  className="relative"
                  data-aos="fade-up"
                  data-aos-duration={300}
                >
                  <span
                    className="absolute top-3 bg-orange-500 p-1 pe-6 text-sm font-semibold text-white"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)",
                    }}
                  >
                    Announcement
                  </span>
                  <img
                    src="assets/images/blog/blog-1.png"
                    className="rounded-md"
                  />
                </div>
                <p className="text-slate-500 mt-5">May 19 2020 . 5 min read</p>
                <h4 className="mt-1 text-lg">
                  <a href="#">Introducing blazzing fast new user interface</a>
                </h4>
              </div>
              <div>
                <div
                  className="relative"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  <span
                    className="absolute top-3 bg-red-500 p-1 pe-6 text-sm font-semibold text-white"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)",
                    }}
                  >
                    Bitcoin
                  </span>
                  <img
                    src="assets/images/blog/blog-3.png"
                    className="rounded-md"
                  />
                </div>
                <p className="text-slate-500 mt-5">May 18 2020 . 8 min read</p>
                <h4 className="mt-1 text-lg">
                  <a href="#">What you should know before buying bitcoin</a>
                </h4>
              </div>
              <div>
                <div
                  className="relative"
                  data-aos="fade-up"
                  data-aos-duration={900}
                >
                  <span
                    className="absolute top-3 bg-blue-500 p-1 pe-6 text-sm font-semibold text-white"
                    style={{
                      clipPath:
                        "polygon(0% 0%, 100% 0, 90% 49%, 100% 99%, 0% 100%)",
                    }}
                  >
                    Event
                  </span>
                  <img
                    src="assets/images/blog/blog-2.png"
                    className="rounded-md"
                  />
                </div>
                <p className="text-slate-500 mt-5">May 13 2020 . 2 min read</p>
                <h4 className="mt-1 text-lg">
                  <a href="#">A biggest crypto event to attend this month</a>
                </h4>
              </div>
            </div>
          </div>
        </section>
        {/* =========== Blog Section End =========== */}
        {/* =========== Footer Section Start =========== */}
        <footer className="bg-gray-100">
          <div className="container">
            <div className="grid xl:grid-cols-5 gap-6 py-12">
              <div className="col-span-2">
                <a href="index.html">
                  <img src="assets/images/logo-dark.png" className="h-8" />
                </a>
                <p className="text-sm text-gray-500/80 mt-5 lg:w-4/5">
                  A seamless, flexible and diverse platform to buy, sell and
                  manage your cryptocurrency portfolio
                </p>
              </div>
              <div className="xl:col-span-3 col-span-4">
                <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-between">
                  <div>
                    <div className="flex flex-col gap-3">
                      <h5 className="mb-3 uppercase">Platform</h5>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Demo</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Pricing</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Integrations</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Status</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <h5 className="mb-3 uppercase">Knowledge Base</h5>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Blog</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Help Center</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Sales Tools catalog</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">API</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <h5 className="mb-3 uppercase">Company</h5>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">About us</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Career</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Contact Us</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col gap-3">
                      <h5 className="mb-3 uppercase">Legal</h5>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Usage Policy</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Privacy Policy</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Terms of Service</a>
                      </div>
                      <div className="text-gray-500/80">
                        <a href="javascript:void(0);">Trust</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t py-6">
              <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">
                <div>
                  <p className="text-gray-500/80 text-sm">
                    © Prompt. All rights reserved. Crafted by{" "}
                    <a
                      href="#"
                      className="text-gray-800 hover:text-primary transition-all"
                    >
                      Coderthemes
                    </a>
                  </p>
                </div>
                <div className="flex justify-center sm:justify-end gap-7">
                  <div>
                    <a href="#">
                      <svg
                        className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svg
                        className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svg
                        className="w-5 h-5 text-gray-500 hover:text-primary transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x={2} y={9} width={4} height={12} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* =========== Footer Section End =========== */}
        {/* =========== Back To Top Start =========== */}
        <button
          data-toggle="back-to-top"
          className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center"
        >
          <i className="fa-solid fa-arrow-up text-base" />
        </button>
      </div>
    </div>
  );
}

export default App;
