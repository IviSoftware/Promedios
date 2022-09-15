const btnAdd = document.querySelector('.btn_add');
const containerMat = document.querySelector('.materias');
const containerCal = document.querySelector('.calificaciones');
const btnDelete = document.querySelector('.btn-delete');

function addCourse(){
  const matInput = document.createElement('input');
  matInput.className='txt_user txt_course';
  matInput.type='text';
  matInput.placeholder='Materia';

  const calInput = document.createElement('input');
  calInput.className='txt_user txt_course';
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

btnAdd.addEventListener('click',addCourse);
btnDelete.addEventListener('click',deleteCourse);

