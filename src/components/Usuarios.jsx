import React, { useState, useEffect, Suspense } from "react";
import CartaUsuario from "./CartasUsuario";

export default function Usuarios() {
  const [datosUsuarios, setDatosUsuarios] = useState([]);

  const [listaDeUsuarios, SetListaDeUsuarios] = useState([]);

  const datosApi = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?gender=female");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      var apiData = await response.json();
      apiData = apiData.results[0];
      setDatosUsuarios([apiData]);
    } catch (error) {
      alert("Hubo un error al obtener los datos:", error);
    }

    listaDeUsuarios;
  };

  const añadirUsuario = () => {
    datosApi();

    let user = {
      id: Date.now(),
      firstName: datosUsuarios[0]?.name.first,
      lastName: datosUsuarios[0]?.name.last,
      img: datosUsuarios[0]?.picture.large,
      suspended: false,
    };

    SetListaDeUsuarios((prevUsers) => (user.id ? [...prevUsers, user] : ""));
  };

  const handleCardSuspended = (id, suspended) => {
    const updateCard = listaDeUsuarios.map((user) => {
      if (user.id === id) {
        SetListaDeUsuarios((prevSuspended) => {
          return prevSuspended.map((prevSuspended) => {
            if (prevSuspended.id === id) {
              return { ...prevSuspended, suspended };
            }
            return prevSuspended;
          });
        });

        return { ...suspended, suspended };
      }
    });
    // console.log(listaDeUsuarios);
  };

  const handleDeleteUser = () => {
    const updateSuspendedFiltrer = listaDeUsuarios.filter(
      (user) => user.suspended === false
    );
    SetListaDeUsuarios(updateSuspendedFiltrer);
  };

  return (
    <div className="">
      <div className="justify-center items-center flex">
        <button className="m-4 bg-sky-600" onClick={añadirUsuario}>
          Añadir usuario
        </button>
        <button className="m-4 bg-red-600" onClick={handleDeleteUser}>
          Eliminar suspendidas
        </button>
      </div>

      <div className="justify-center items-center flex ">
        <div className="grid grid-cols-3 gap-3 p-5 w-3/5">
          {listaDeUsuarios.map(
            (user, index) =>
              user.firstName != undefined && (
                <CartaUsuario
                  onSuspended={handleCardSuspended}
                  id={user.id}
                  key={index}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  img={user.img}
                ></CartaUsuario>
              )
          )}
        </div>
      </div>
    </div>
  );
}
