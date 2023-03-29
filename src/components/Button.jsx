import { useState } from 'react'
import '/src/styles/Button.css'

function Button({ text, variant, callback}) {

    let clickHandler = function(e){
      if(callback != undefined && variant != "disabled"){
        callback()
      }
    }
  
    let classRenderer = function (){
      let classes = [
        'Button', variant
      ]
      return classes.join(" ")
    }
  
    return (
      <div onClick={clickHandler} className={classRenderer()}>
        { text }
      </div>
    )
  }
  
export default Button
