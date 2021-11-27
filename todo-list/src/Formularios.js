import {useState} from 'react';

function Formulario() {
  const country =[

  ];

  const [dataForm, setDataForm] = useState({
    name:'',
    lastname:'',
    age:'',
    country:'',
    sex:'',
    hobbies: [],
    tel:'',
    direccion:'',
  });
  return (
    <div>
      <h1>AGREGAR ALUMNO</h1>
      <form>
        <div class="row">
          <div>
            <input value={dataForm.name} type="text" placeholder="Nombre"/>
          </div>
          <div>
            <input value={dataForm.lastname} type="text" placeholder="Apellido"/>
          </div>
        </div>
        <div class="row">
          <div>
            <input value={dataForm.age} type="text" placeholder="Edad"/>
          </div>
          <div>
            <select name="" id="">
              {countries.map((country) => (
                <option>{country.title}</option>
              ))}
            </select>
          </div>
        </div>

      </form>
    </div>
  )
}