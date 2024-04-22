var width = screen.width;
new_wdith = screen.width - 709;
new_height = screen.geight - 300;
color = "black";
    width_of_line = 2;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
if (width < 992)
{
    document.getElementById("myCanvas").width = new_wdith;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
var last_position_of_x, last_position_of_y;

    
    
    

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends
last_position_of_x = e.touches [0].clientX - canvas.affsetLeft;
last_position_of_y = e.touches [0].clientY - canvas.affsetTop;
        mouseEvent = "touchstart";
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

      
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
