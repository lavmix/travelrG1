<?php
class App_controller{
 
 function __construct(){
  
 }
 
 function home(){
    #récupération de la location
    $App=new App();
    $location=$App->locationDetails();
    F3::set('location',$location);
    
    #récupération des images de la location
    $pictures=$App->locationPictures($location->id);
    $json=Views::instance()->toJson($pictures,array('image'=>'src'));
    F3::set('pictures',$json);
    
    $next=$App->next($location->id);
    $prev=$App->prev($location->id);
    

    $p=$prev?$prev[0]['id'].'-'.$prev[0]['title']:'';
    $n=$next?$next[0]['id'].'-'.$next[0]['title']:'';

    F3::set('prev',$p);
    F3::set('next',$n);

    
    echo Views::instance()->render('travelr.html');
 }
 
  
  function doc(){
    echo Views::instance()->render('userref.html');
  }
 
 function __destruct(){

 } 
}
?>