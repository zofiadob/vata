'use client';
import React, { useEffect, useRef, useState } from 'react'

function HeaderSection() {

  const myRef = useRef(null);
  const [myElementVisible, setMyElementVisible] = useState(true);

  console.log('myElementVisible', myElementVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entires) => {
      const entry = entires[0];
      console.log("entry",entry)
      setMyElementVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

  useEffect(() => {

  }, [myElementVisible])

  return (
    <section>
      <div className={`flex ${myElementVisible ? 'content-fade-in' : 'content-fade-out'}`} ref={myRef}>
        <div>1</div>
        <div>2</div>
      </div>
    </section>
  )
}

export default HeaderSection