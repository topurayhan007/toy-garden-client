/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const [acc1Visible, setAcc1Visible] = useState(true);
  const [acc2Visible, setAcc2Visible] = useState(false);
  const [acc3Visible, setAcc3Visible] = useState(false);
  const [acc4Visible, setAcc4Visible] = useState(false);

  const handleAcc1 = () => {
    setAcc1Visible(!acc1Visible);
    setAcc2Visible(false);
    setAcc3Visible(false);
    setAcc4Visible(false);
  };
  const handleAcc2 = () => {
    setAcc2Visible(!acc2Visible);
    setAcc1Visible(false);
    setAcc3Visible(false);
    setAcc4Visible(false);
  };
  const handleAcc3 = () => {
    setAcc3Visible(!acc3Visible);
    setAcc1Visible(false);
    setAcc2Visible(false);
    setAcc4Visible(false);
  };
  const handleAcc4 = () => {
    setAcc4Visible(!acc4Visible);
    setAcc1Visible(false);
    setAcc2Visible(false);
    setAcc3Visible(false);
  };

  return (
    <div>
      <Helmet>
        <title>Toy Garden | Blogs</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center flex-col text-lg">
          <div className="flex flex-col items-center mt-20">
            <h3 className="md:text-5xl text-4xl lg:text-7xl font-extrabold mb-7 text-purple-950">
              Topu's Blog
            </h3>
          </div>
          <section
            className="mt-20 md:text-center text-left"
            id="quesAnsContainer"
          >
            <div className="shadow-md rounded-xl mx-3 my-8 border-2 border-purple-100">
              <div
                className={
                  acc1Visible === true
                    ? "flex items-center py-6 px-5 rounded-t-xl bg-purple-800 relative"
                    : "flex items-center py-6 px-5 rounded-xl bg-purple-800 relative"
                }
              >
                <div className="h-8 w-8 bg-[#ffad00] font-bold rounded-full flex justify-center items-center text-black mr-3">
                  1
                </div>
                <p className="text-white  text-xl font-bold">
                  Difference between <code>'uncontrolled'</code> and{" "}
                  <code>'controlled'</code> components?
                </p>
                <button
                  onClick={handleAcc1}
                  className="rounded-full w-8 h-8 font-extrabold bg-white text-black absolute right-5"
                >
                  {acc1Visible === false ? <>+</> : <>-</>}
                </button>
              </div>
              <div
                className={
                  acc1Visible === false
                    ? "hidden items-center py-5"
                    : "flex items-center py-5"
                }
              >
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components are those which does not need for its parent to
                  influence it. It is managed by the DOM rather than a state. On
                  the other hand,
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  component's value is controlled using state, and the parent
                  component alter's itss behavior. Whenever a component's state
                  changes due to the user writing something, the form element is
                  updated with the new value. Both type of component's are used
                  to render form elements. The difference is{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  components can get the value whenever needed as it updates on
                  change, however{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components requires you to use a reference to get the value.
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-xl mx-3 my-8 border-2 border-purple-100">
              <div
                className={
                  acc2Visible === true
                    ? "flex items-center py-6 px-5 rounded-t-xl bg-purple-800 relative"
                    : "flex items-center py-6 px-5 rounded-xl bg-purple-800 relative"
                }
              >
                <div className="h-8 w-8 bg-[#ffad00] font-bold rounded-full flex justify-center items-center text-black mr-3">
                  2
                </div>
                <p className="text-white  text-xl font-bold">
                  Difference between <code>'uncontrolled'</code> and{" "}
                  <code>'controlled'</code> components?
                </p>
                <button
                  onClick={handleAcc2}
                  className="rounded-full w-8 h-8 font-extrabold bg-white text-black absolute right-5"
                >
                  {acc2Visible === false ? <>+</> : <>-</>}
                </button>
              </div>
              <div
                className={
                  acc2Visible === false
                    ? "hidden items-center py-5"
                    : "flex items-center py-5"
                }
              >
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components are those which does not need for its parent to
                  influence it. It is managed by the DOM rather than a state. On
                  the other hand,
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  component's value is controlled using state, and the parent
                  component alter's itss behavior. Whenever a component's state
                  changes due to the user writing something, the form element is
                  updated with the new value. Both type of component's are used
                  to render form elements. The difference is{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  components can get the value whenever needed as it updates on
                  change, however{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components requires you to use a reference to get the value.
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-xl mx-3 my-8 border-2 border-purple-100">
              <div
                className={
                  acc3Visible === true
                    ? "flex items-center py-6 px-5 rounded-t-xl bg-purple-800 relative"
                    : "flex items-center py-6 px-5 rounded-xl bg-purple-800 relative"
                }
              >
                <div className="h-8 w-8 bg-[#ffad00] font-bold rounded-full flex justify-center items-center text-black mr-3">
                  3
                </div>
                <p className="text-white  text-xl font-bold">
                  Difference between <code>'uncontrolled'</code> and{" "}
                  <code>'controlled'</code> components?
                </p>
                <button
                  onClick={handleAcc3}
                  className="rounded-full w-8 h-8 font-extrabold bg-white text-black absolute right-5"
                >
                  {acc3Visible === false ? <>+</> : <>-</>}
                </button>
              </div>
              <div
                className={
                  acc3Visible === false
                    ? "hidden items-center py-5"
                    : "flex items-center py-5"
                }
              >
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components are those which does not need for its parent to
                  influence it. It is managed by the DOM rather than a state. On
                  the other hand,
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  component's value is controlled using state, and the parent
                  component alter's itss behavior. Whenever a component's state
                  changes due to the user writing something, the form element is
                  updated with the new value. Both type of component's are used
                  to render form elements. The difference is{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  components can get the value whenever needed as it updates on
                  change, however{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components requires you to use a reference to get the value.
                </p>
              </div>
            </div>

            <div className="shadow-md rounded-xl mx-3 my-8 border-2 border-purple-100">
              <div
                className={
                  acc4Visible === true
                    ? "flex items-center py-6 px-5 rounded-t-xl bg-purple-800 relative"
                    : "flex items-center py-6 px-5 rounded-xl bg-purple-800 relative"
                }
              >
                <div className="h-8 w-8 bg-[#ffad00] font-bold rounded-full flex justify-center items-center text-black mr-3">
                  4
                </div>
                <p className="text-white  text-xl font-bold">
                  Difference between <code>'uncontrolled'</code> and{" "}
                  <code>'controlled'</code> components?
                </p>
                <button
                  onClick={handleAcc4}
                  className="rounded-full w-8 h-8 font-extrabold bg-white text-black absolute right-5"
                >
                  {acc4Visible === false ? <>+</> : <>-</>}
                </button>
              </div>
              <div
                className={
                  acc4Visible === false
                    ? "hidden items-center py-5"
                    : "flex items-center py-5"
                }
              >
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide ">
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components are those which does not need for its parent to
                  influence it. It is managed by the DOM rather than a state. On
                  the other hand,
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  component's value is controlled using state, and the parent
                  component alter's itss behavior. Whenever a component's state
                  changes due to the user writing something, the form element is
                  updated with the new value. Both type of component's are used
                  to render form elements. The difference is{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Controlled'
                  </code>{" "}
                  components can get the value whenever needed as it updates on
                  change, however{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Uncontrolled'
                  </code>{" "}
                  components requires you to use a reference to get the value.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
