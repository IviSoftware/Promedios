const btnAdd = document.querySelector('.btn_add');
const containerMat = document.querySelector('.materias');
const containerCal = document.querySelector('.calificaciones');
const btnDelete = document.querySelector('.btn-delete');
const getPromed = document.querySelector('.btn_promedio');
const promedioResul = document.querySelector('.result');

function addCourse(){
  const matInput = document.createElement('input');
  matInput.className='txt_user txt_course';
  matInput.type='text';
  matInput.placeholder='Materia';

  const calInput = document.createElement('input');
  calInput.className='txt_user txt_cal';
  calInput.type='text';
  calInput.placeholder='Calificacion';

  containerMat.appendChild(matInput);
  containerCal.appendChild(calInput);
  btnDelete.style.display="block"
}

function deleteCourse(){
  const calToDelete = containerCal.lastChild;
  const matToDelete = containerMat.lastChild;

  containerCal.removeChild(calToDelete);
  containerMat.removeChild(matToDelete);

  const childs = containerCal.childNodes.length;
  console.log(childs)
  if(childs <= 7){
    btnDelete.style.display="none"
  }

}

function getPromedio(){
  const nodesMaterias = document.querySelectorAll('.txt_course');
  const nodesCalificaciones = document.querySelectorAll('.txt_cal');
  
  const listMaterias = Array.apply(null,nodesMaterias).map(item=> item.value);
  const listCalificaciones = Array.apply(null,nodesCalificaciones).map(item=> parseInt(item.value) );
  
  const sumCal = listCalificaciones.reduce((acc,item)=> acc + item);
  const result = sumCal / listMaterias.length;
  
  if(result){
    promedioResul.innerText = `Tu promedio es : ${result}`;
  }else{
    promedioResul.innerText = 'Ingresa calificaciones';
  }

}

btnAdd.addEventListener('click',addCourse);
btnDelete.addEventListener('click',deleteCourse);
getPromed.addEventListener('click',getPromedio);
