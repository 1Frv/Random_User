import React, { useState } from "react";

export default function CartaUsuario({
  onSuspended,
  id,
  firstName: primerNombre,
  lastName: segundoNombre,
  img: photo,
}) {
  const [suspended, setSuspended] = useState(false);
  const Cardsuspended = () => {
    setSuspended(!suspended);
    onSuspended(id, !suspended);
  };

  return (
    <div className="" onClick={Cardsuspended}>
      {suspended !== true ? (
        <div className="cursor-pointer rounded-xl bg-slate-50 shadow-2xl m-3 font-bold p-7">
          <div className="flex justify-center ">
            <img src={photo} className="rounded-full" />
          </div>

          <div className="flex justify-center p-3">
            <p className="">
              {primerNombre} {segundoNombre}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-slate-500 cursor-pointer rounded-xl shadow-2xl m-3 font-bold p-7">
          <div className="flex justify-center">
            <img src={photo} className="rounded-full" />
          </div>

          <div className="flex justify-center p-3">
            <p>Suspendida</p>
          </div>
        </div>
      )}
    </div>
  );
}
