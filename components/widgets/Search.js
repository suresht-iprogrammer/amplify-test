import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '../../assets/css/Search.module.css'
import {search as searchData} from '../../public/assets/data'
export default function Search({searchInputClassName}) {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])


  const onChange = useCallback((event) => {
    const query = event.target.value.toLowerCase();
        setQuery(query)
        setResults([...searchData.filter(dataItem=>dataItem.title.toLowerCase().includes(query))])
    }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className={styles.container}
      ref={searchRef}
    >
      <input
        className={`${styles.search} ${searchInputClassName}`}
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search sports' grounds"
        type='text'
        value={query}
      />
      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title, distance }) => (
            <li key={id}>
              <Link href="/ground/[id]" as={`/ground/${id}`}>
                <div className={styles.result}>
                  <div className={styles.title}>{title}</div>
                  <div>{distance} km</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}