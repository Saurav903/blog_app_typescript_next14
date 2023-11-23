// "use client";
import React, { memo } from "react";
import style from "../styles/home.module.css";

import Image from "next/image";
import Footers from "./footers";
import { getapihome } from "../services/apicall";



const HomePage = async() => {


  let homePageMidddleData = await getapihome();


  return (
    <div>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse w-[85%] mt-[80px] sm:mt-[50px]">
            <Image
              src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60"
              alt=""
              className="max-w-sm rounded-lg shadow-2xl"
              width={300}
              height={300}
            />
            <div>
              <p class={style.headings}>Trending</p>
              <p className="py-6 text-cyan-50">
                A flowerpot, planter, planterette or plant pot, is a container
                in which flowers and other plants are cultivated and displayed.
                Historically, and still to a significant extent today, they are
                made from plain terracotta with no ceramic glaze, with a round
                shape, tapering inwards.
              </p>
              <button className="btn btn-primary sm:hidden md:hidden lg:block hidden">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1
            class={style.headings}
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Featuring
          </h1>
        </div>
      </div>

      <div class={style.webbox}>
        <div className="mockup-browser border border-base-600">
          <div className="mockup-browser-toolbar">
            <div className="input border border-base-600">
              https://plantworld.com
            </div>
          </div>
          <div className="flex justify-center px-4 py-16 border-t border-base-600">
            <div class="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {homePageMidddleData.pages?.map((el, i) => (
                <div className="card w-96 glass m-auto" key={i}>
                  <figure>
                    <Image
                      src={el.custom_excerpt}
                      alt="car!"
                      width={300}
                      height={300}
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "10px",
                        marginTop: "10px",
                      }}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-cyan-50">{el.title}</h2>
                    <div dangerouslySetInnerHTML={{__html:el.html}} className="text-cyan-50" />
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Learn now!</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

      <div class={style.foot}>
        <Footers />
      </div>
    </div>
  );
};

export default HomePage;
