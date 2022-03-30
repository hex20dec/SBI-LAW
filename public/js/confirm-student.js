const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get('uid');
let email = urlParams.get('email');
const fname = urlParams.get('fname');
const instrument = urlParams.get('instrument');
const base_url = 'https://musicsol-server.herokuapp.com';
// const base_url = 'http://localhost:8000';

if(email !== null){
  
  // attach missing pluses from emails
  email = encodeURIComponent(email.replace(/\s/g,'+'));

}

function confirmStudent(e){
  e.preventDefault();
  $(e.target).off('click');
  fetch(`${base_url}/assign/${uid}/${email}`)
  .then(data=>data.text())
  .then(data=>{
    if(data==='Assigned!'){
      $("#ty-modal").modal();
    }
  });
}

function startupcheck(){
  
  // fetch confirmation that user is pending
  fetch(`${base_url}/check/${uid}`)
  .then(data=>data.text())
  .then(data=>{
    if(data==='ok'){
      $("#main-card-body .fname").text(fname);
      $("#main-card-body .instrument").text(instrument);
      // $("#main-card-body")
      $("#main-card-body").attr("hidden", false);

      $("#confirm-student").on('click', confirmStudent);
    }else{
      $("#alreadyassigned").attr("hidden", false);
    }
  })
}

$(document).on('hide.bs.modal', function(){
  location = "https://musicsol.net";
});





startupcheck();