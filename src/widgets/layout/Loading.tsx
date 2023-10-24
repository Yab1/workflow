import { Fragment } from "react";

function Loading({ open }: { open: Boolean }) {
  return (
    <Fragment>
      {open ? (
        <div className="fixed inset-0 z-50 grid w-screen h-screen bg-black bg-opacity-50 place-items-center backdrop-blur-sm">
          <div className="wrapper">
            <div className="box-wrap">
              <div className="box one"></div>
              <div className="box two"></div>
              <div className="box three"></div>
              <div className="box four"></div>
              <div className="box five"></div>
              <div className="box six"></div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

Loading.displayName = "/src/widgets/layout/Loading.tsx";

export default Loading;