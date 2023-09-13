const pesawat = document.getElementById('pesawat');
const manJump = document.getElementById('man-jump');
const canvas = document.getElementById('canvas');
const clouds = document.getElementById('clouds');
const totalClouds = 150;

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setClouds(){
    for (let i = 1; i <= totalClouds; i++){
        let cloud = document.createElement('div');
        cloud.id = 'cloud' + i;
        cloud.classList.add('cloud' + random(1, 5));
        clouds.appendChild(cloud);

        //set posisi
        cloud.style.left = random(-50, (-window.innerWidth * 3)) + 'px';
        cloud.style.top = random(0, window.innerHeight ) + 'px';
        cloud.style.zIndex = random(1, 10 );
    }
}


function setBacground(){
    canvas.style.width= window.innerWidth + 'px';
    canvas.style.height= window.innerHeight * 2 + 'px';
    canvas.style.top= -window.innerHeight  + 'px';
}

function animate(){
    pesawat
        .velocity({
            top: '0px',
            right: '30%',
            transform: ["rotate(10deg)", "rotate(0deg)"]        
        },{
            duration: 7000,
        })
        .velocity({
            right: '35%',
            transform: ["rotate(0deg)", "rotate(10deg)"]        
        },{
            duration: 7000,
        })

        .velocity({
            left: '-850px',
            top: '100px',
            transform: ["rotate(-5deg)", "rotate(0deg)"]        
        },{
            duration: 15000,
        })

    manJump
        .velocity({
            opacity:1
        },{
            delay: 13000,
            duration:1000
        })

        .velocity({
            top: window.innerHeight + 160,
        },{
            queue: false,
            delay: 13000,
            duration:10000
        })

    canvas
        .velocity({
            top: '0',
        },{
            queue: false,
            duration: 7000,
        })

    for (let i = 1; i <= totalClouds; i++){

        let duration = Math.abs(parseInt(document.getElementById('cloud' + i).style.left) / 100) * 2000;

        console.log(document.getElementById('cloud' + i).style.left, duration)

        if(duration< 10000){
            duration = random(10000, 15000)
        }

        document.getElementById('cloud' + i)
            .velocity({
                left: window.innerWidth * 2,
            },{
                duration: duration,
            })
    }

    
}

setClouds()
setBacground()
animate()