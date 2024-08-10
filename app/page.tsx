import Image from "next/image";
import FractalCanvas from "@/app/ui/FractalCanvas";
import styles from "./styles.module.css";
import MorphingText from "@/app/ui/MorphingText";
import HumanAssistant from "@/app/ui/HumanAssistant";

export default function Home() {


  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className={styles.header}>
            <p
                style={{
                  padding: "0 12px 28px 12px",
                  borderRight: "1px solid chartreuse",
                }}
                className="fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              <br/>
              <div className={styles.headerAreUReady}>
                <div className={styles.code}>
                  <p className={styles.codeH1}>
                    The Next Step in Evolution&nbsp;
                  </p>
                  <FractalCanvas/>
                  &nbsp;&nbsp;&nbsp;
                  Are You Ready?&nbsp;
                  <a className={styles.codeLink}>
                    :Watch Incredible Video
                  </a>
                </div>
              </div>
            </p>
          </div>
          <div
              className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >


            </a>
          </div>
        </div>

        <div
            className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">

        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
              href="#"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRight: "1px solid chartreuse"
              }}
          >
            <h2>
              <FractalCanvas/>
              <br/>
              A unique leisure is available on the territory of Russia{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Experience exclusive, where every moment is tailored to VIP clients seeking unparalleled tranquility and
              rejuvenation.
            </p>
          </a>
          <a
              href="#"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRight: "1px solid chartreuse"
              }}
          >
            <h2>
              <FractalCanvas/>
              <br/>
              Full privacy and security of the connection by Kaspersky{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Rest assured with Kaspersky's state-of-the-art security ensuring your privacy.
            </p>
          </a>
          <a
              href="#"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRight: "1px solid chartreuse"
              }}
          >
            <h2>
              <FractalCanvas/>
              <br/>
              Human Support for Your Session{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Enjoy the touch of our best girls, including real-life curators who ensure every detail of your session is
              meticulously tailored to your desires.
            </p>
          </a>

          <a
              href="#"
              className="group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRight: "1px solid chartreuse"
              }}
          >
            <h2>
              <FractalCanvas/>
              <br/>
              Warranty and technical support throughout the session{" "}
              <span
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Benefit from continuous technical support and a comprehensive warranty covering your entire session.
            </p>
          </a>
        </div>
        <HumanAssistant/>


      </main>
  );
}
