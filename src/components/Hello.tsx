import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function Hello() {
  const [height, setHeight] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const measuredRef = useCallback((node: HTMLElement | null) => {
    if (node != null) {
      console.log(node)
      setHeight(node.nodeValue?.length||0);
    }
  }, []);
  const [text, setText] = useState<string>("");
  useEffect(() => {
    const h = setInterval(() => setText(text + "A"), 1000);
    return () => clearInterval(h)
  }, [text]);
  return <>
    <h1 ref={measuredRef} onClick={()=>setCount(count+1)}>A {text} {count}</h1>
    <h2>The height is {height}</h2>
  </>
}