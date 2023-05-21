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
                  What is an <code>'access token'</code> and{" "}
                  <code>'refresh token'</code>? How do they work and where
                  should we store them on the client-side?
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
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide text-lg">
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Access token'
                  </code>{" "}
                  and{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'refresh token'
                  </code>{" "}
                  both are a type of token used as a credential to authenticate
                  users. Although the difference between the two is one is long
                  term another is short term.{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Access token'
                  </code>{" "}
                  expires frequently whereas the{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'refresh token'
                  </code>{" "}
                  stays for a longer period of time. In addition these are used
                  to authenticate client API request. If someone is trying to
                  access data using a API which requires just a email or a id
                  field then everyone will be able to access each other's
                  information, to restrict that we use{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'access token'
                  </code>{" "}
                  and{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'refresh token'
                  </code>{" "}
                  . These tokens can be stored in varies ways namely; HTTP only
                  cookies, local or session storage or even in memory.
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
                  Compare <code>'SQL'</code> and <code>'NoSQL'</code> databases?
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
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide text-lg">
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'SQL'
                  </code>{" "}
                  databases are constructed using a relational data model
                  whereas,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NoSQL'
                  </code>{" "}
                  follow a object like approach, more specifically "document" or
                  "key-value". In addition,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'SQL'
                  </code>{" "}
                  ensures data integrity using relations whereas,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NoSQL'
                  </code>{" "}
                  focuses on flexiblity allowing dynamic changes to the data
                  model or structure.{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'SQL'
                  </code>{" "}
                  is more scalable to vertical data as horizontal scaling is
                  resource intensive. On the other hand,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NoSQL'
                  </code>{" "}
                  is more suitable for large scalable applications due to their
                  nature of being horizontally scalable. In terms of queries,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'SQL'
                  </code>{" "}
                  databases uses SQL to perform CRUD operations. Whereas,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NoSQL'
                  </code>{" "}
                  depends on different types of query languages or API to
                  perform CRUD operations using queries similar to JSON data
                  manipulation.
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
                  What is <code>'ExpressJS'</code> and <code>'NestJS'</code>?
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
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide text-lg">
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'ExpressJS'
                  </code>{" "}
                  and{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NextJS'
                  </code>{" "}
                  are both NodeJS framework. However,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'ExpressJS'
                  </code>{" "}
                  is built with JavaScript whereas,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NestJS'
                  </code>{" "}
                  is built with TypeScript.{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'ExpressJS'
                  </code>{" "}
                  is more flexible towards providing simple ways to build APIs
                  or servers. Moreover, it is high performing and lightweight.
                  In contrast,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NestJS'
                  </code>{" "}
                  is more maintainable, scalable and efficient in building
                  server side applications. While{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'ExpressJS'
                  </code>{" "}
                  is simple and effective,{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'NestJS'
                  </code>{" "}
                  provides more suitability towards complex applications.
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
                  What is MongoDB <code>'aggregate'</code> and how does it work?
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
                <p className="mx-3 md:mx-11  text-start leading-loose tracking-wide text-lg">
                  MongoDB{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'aggregate'
                  </code>{" "}
                  is a powerful tool that provides the users to perform advanced
                  or complex queries more efficiently.{" "}
                  <code className="bg-purple-50 p-1 rounded font-bold">
                    'Aggregate'
                  </code>{" "}
                  can be used to sort, group, filter any many more operations in
                  a flexible and efficient manner. It uses a pipeline stage to
                  the data or collection, manipulating and transforming the data
                  as it moves down the pipeline.
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
