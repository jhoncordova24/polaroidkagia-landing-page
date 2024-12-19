import React from "react";
import avatar from "../img/avatar.png";

function Testimonials() {
  return (
    <section class="py-6 text-blue-900 sm:py-16 lg:py-20 mt-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-11 text-gray-800 dark:text-white">
        Testimonios
      </h2>
      <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
        <div class="flex flex-col lg:flex-row">
          <div class="relative mx-auto mb-10 flex h-96 overflow-hidden rounded-xl bg-customPink shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
            <img
              class="absolute top-0 h-full w-full object-cover opacity-10"
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt=""
            />
            <div class="relative mt-auto w-full">
              <div class="flex flex-col p-6 lg:px-7 lg:py-8">
                <div class="">
                  <blockquote class="">
                    <p class="text-3xl font-bold text-white sm:text-5xl">
                      "Muy buenos productos vende la negra."
                    </p>
                  </blockquote>
                </div>

                <div class="mt-10 flex items-center">
                  <img
                    class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    src={avatar}
                    alt=""
                  />
                  <div class="ml-4 text-white">
                    <p class="text-base font-bold">EL oso</p>
                    <p class="text-blue-90 mt-0.5 text-sm">
                      Fumon de la vallejo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
            <div class="flex flex-col">
              <div class="">
                <blockquote class="">
                  <p class="text-lg leading-relaxed text-gray-800">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium dolores facere repellendus, velit quis fugiat."
                  </p>
                </blockquote>
              </div>

              <div class="mt-4 flex items-center">
                <img
                  class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src={avatar}
                  alt=""
                />
                <div class="ml-4">
                  <p class="text-base font-bold text-gray-800">
                    James Khawalski
                  </p>
                  <p class="mt-0.5 text-sm text-gray-800">CEO, Mavoline</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="">
                <blockquote class="">
                  <p class="text-lg leading-relaxed text-gray-800">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium dolores facere repellendus, velit quis fugiat."
                  </p>
                </blockquote>
              </div>

              <div class="mt-4 flex items-center">
                <img
                  class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src={avatar}
                  alt=""
                />
                <div class="ml-4">
                  <p class="text-base font-bold text-gray-800">Jacob Jones</p>
                  <p class="text-blue-90 mt-0.5 text-sm text-gray-800">
                    Youtube Personality
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <div class="">
                <blockquote class="">
                  <p class="text-lg leading-relaxed text-gray-800">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Praesentium dolores facere repellendus, velit quis fugiat."
                  </p>
                </blockquote>
              </div>

              <div class="mt-4 flex items-center">
                <img
                  class="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src={avatar}
                  alt=""
                />
                <div class="ml-4">
                  <p class="text-base font-bold text-gray-800">Jenny Wilson</p>
                  <p class="text-blue-90 mt-0.5 text-sm text-gray-800">
                    Esports Commentator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
