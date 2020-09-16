navigator.mediaDevices.getUserMedia({ audio: false, video: true}).then((camara) => {
    console.log(camara)
    let video = document.getElementById('video')
    video.srcObject = camara
}).catch((err) => {
    console.log("getUserMedia no soportado.")
    console.log(err)
})
