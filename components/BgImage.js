import * as React from 'react';
import styles from '../styles/BgImage.module.css'
import { useEffect, useState} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { getNextImage } from '../lib/images'


export default function BgImage({hide, children}) {
  const [src, setSrc] = useState("");
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
      setLoading(true)
      let a = await getNextImage()
      if (a.image == src) {
        setLoading(false)
      }
      setSrc(a.image)
      setLocations(a.location)
  }

  const setLoaded = () => {
    setLoading(false)
  }
  
  useEffect(async () => {
      load();
  }, [])

  return (
    <>
      <img onLoad={setLoaded} className={`${styles.imgWrapper} ${loading ? styles.loading : ""}`} src={src} />
      {!hide && <div className={styles.openWindow}>
        <Link href="/image"  >
          <h1 onClick={load} className={styles.open}> Open a new window </h1>
        </Link>
      </div>
      }
      {children}
      <div className={styles.location}>
        <Image className={styles.locationIcon} src="/location_icon.png" alt="me" width="39" height="26"/>
        <div className={styles.locationList}>
        {locations.map( (l) =>
           <div className={styles.locationEl}> {l} </div>
        )}
        </div>
      </div>
    </>
  );
}