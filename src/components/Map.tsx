
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHU3ZWQxaXMwMHFtMmpxdDk2NWJ3MjB4In0.Z2OCi8gu_5OHJ8gkvxGPiw';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [77.6026372, 13.0728345], // Longitude, Latitude
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([77.6026372, 13.0728345])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>CEFAT</h3><p>14, KV Jairam Rd, above Appam's Bakery & Sweets, Jakkuru</p>"))
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
