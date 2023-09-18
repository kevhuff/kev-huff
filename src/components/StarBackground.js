const StarBackground = () => {
    const numberOfStars = 100;  
    return (
        <div className="stars-bg">
            {Array.from({ length: numberOfStars }).map((_, idx) => (
             <div 
             key={idx} 
             className={`star ${Math.random() > 0.95 ? 'shooting-star' : ''}`} 
             style={{
                 '--randomY': Math.random(),
                 '--randomX': Math.random(),
                 '--randomDelay': Math.random(),
                 '--randomAngle': 2 * Math.PI * Math.random(),
                 '--randomAngle2': 2 * Math.PI * Math.random(),
                 '--randomSpeed': 0.5 + Math.random(),
                 '--randomSize': Math.random(),
                 '--randomOpacity': Math.random(),
                 '--randomZIndex': Math.random()
             }}
         ></div>
         
            
            ))}
        </div>
    );
}


export default StarBackground;