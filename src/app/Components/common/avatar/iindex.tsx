import React from 'react';
// @ts-ignore
import tinycolor from 'tinycolor2';


interface Profile {
  name?: string;
  imageSrc?: string;
  color?: string;
}

interface AvatarsProps {
  size?: number;
  overlap?: number;
  borderRadius?: string;
  profiles: Profile[];
}

const Avatars: React.FC<AvatarsProps> = ({
  size = 40,
  overlap = 0.8,
  borderRadius = '50%',
  profiles,
}: AvatarsProps) => {
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  };

  const baseImageStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius,
    cursor: 'pointer',
    zIndex: 2,
  };

  return (
    <div style={containerStyle}>
      {profiles.map((profile, index) => {
        const overlayStyle: React.CSSProperties = {
          ...baseImageStyle,
          position: 'absolute',
          transform: `translateX(${index * (overlap * size)}px)`,
          zIndex: index + 3,
        };
        const textColor = profile.color;
        const bgColor = profile.color ? tinycolor(profile.color).lighten(35).toString() : 'lightgray';
        
        return profile.imageSrc ? (
          <img
            key={index}
            src={profile.imageSrc}
            alt={`Avatar ${index + 1}`}
            style={index === 0 ? baseImageStyle : overlayStyle}
            onError={(event) => {
              console.error('Image failed to load:', profile.imageSrc);
            }}
          />
        ) : (
          <div
            key={index}
            style={{
              ...baseImageStyle,
              ...overlayStyle,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', 
              color: textColor, 
              backgroundColor: bgColor,
            }}
          >
            <div
              style={{
                fontSize: size * 0.5,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius, 
              }}
            >
              {profile.name?.split(' ')
                            .map((part) => part.charAt(0).toUpperCase()) 
                            .join('')
                            .slice(0, 2)}

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Avatars;


/*
usage

  const url='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMEBwUGCAH/xAA9EAABAwICBwYFAgMIAwAAAAABAAIDBBEFIQYHEjFBUXETFDJhgZEiIzNSoXKxQoKyCBUWYpLC0fBTweH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAgMEAQUGB//EACcRAQACAgIBAQgDAAAAAAAAAAABAgMREiExBAUiMjM0QVFxQlJh/9oADAMBAAIRAxEAPwC6u7t5leOHYC7cyeakJir8LeqBPeHcglCISAPdkTyUcqXD9JiBBhDPiBOST3g8gnpfpu6LD4viEWE4TV4jUfSpYXTO8w0Xt/3mgqjXdp3VxVv+HMJqHQhjAa2SM2JLhlHfoQTbmFTAy3ZdFIxGtnxKvqa6qdtT1MrpXm98yd3RR0dCEIQCEIQCAbIQgsrVDp7UYHicGD4jMX4XUu2Iy8k93ed1j9pNgR6robvDr22R7ri/obFdU6v8Xdjeh2F10r9qYwBkx4l7fhJ/F/VHG0hglG2cieSDC1ovc5ZpVP8ARalv8J6IGO8HkF6D29wcrcQo4T9Lvd6IFd3bzKE+hBAuef5T1Pm43Sexk5BKYDCbvG/IWQSNkch7KJKT2jhdP9uzmfZNOjc8l7dx3XQIjJL2g81quuR8kerrFjCPE1jXW+0uF1trYnNcHOAsM1gNY7G1mgePQgEnuUjx1aNr/wBIOT0qSN0btmRrmOtezgRlz6IhjfUSMhhG1JK4MYOZOQC6TxjRTBsXoIqKvpRI2CMRxSt+GRgAsLEKu+SKeVlKTbw5qRZWbjOp+uhftYLXwzx/+Op+BwHUAg/hYmDVVpRJKGSR0cLL2Mj6gEdbAXXYyVmPLnC34aRbzW34Nq10kxanbUNghpInC7e9vLC4c9kAn3VpaHaAYZo20TyAVmI8aiRuTP0Dh13rb+N1VfPr4VtcP9nPuMattJMKgdOaeKrjYNpxpXl5A6EA+y1Gy6w8+PNVnrZ0OppsPmx/DoNirhIdUtYMpWcXdR+RdKZtzqXL4dRuFN2XQ39nmodNobVwvIPYV72s8gWtd+5K55V9f2dHBmj2LOO41ot/oC0KFqTG0hAySGk7Qz48049jpXbbBkeaBC8EE2yzQSdkch7JmoyDfPklduzmfZIeRNYMOYQMXPP8oTnYScghBLTFV4W9U327/L2SmEzEh+4DggZUuH6TV53dnmmnSOY4sbaw5oH5fA7osXXxsnoJ6eW2zNE+M34gtIU0SueQ02sTnkoGLxCN0ZHhIKhe3Gu0qV5TpzRq4wp9VpzQ00zM6SR0krTw7P8A+2XQ61hmjcVFp6zHqVmy2qppIp2jcJPhId6gG/TzWzrLltymJhqx0472EIQqtLQhCEAkyMZLG6OVjXscCHNcLgg8EpCDnDTfRifRjG5KXZeaKT46WYjJzeRPMbj7q4NQ1OabQ6V8hs6qrHyNB4tDWtH9JU3TnBv7/wAKp8NtlNVxbZt4WAkuPlkCtiwulipzS0tLG2OGLZYxjRYNaFqjN1EfdlnD3Mtkp/pBLf4T0Ud73Ru2G2sOaBM9xANrHLctCg0E9Tb3eiX3dnn7pLwILFnHfdBIQonbv8vZCBFinafJx6KSmKrwt6oHrjmoko+YUhS4PpNQRowe0byulV8AqIC0eIZt6qRL4HdFCG5cmNxp2J12w5FibixBsvFlKqmEkL5GD42WOXFYtYclOEttLxaAhCFBMIQhAIQhALJYTTnbM7twyb5pqip2viMkrbjas1TQAMgABwstOLH/AClny5I+GDk4+abBJaDtDqpFP9FqW/wnotLM9uOaZqcw31Ufgnqbe70QM2Nty9U5CBnvDftKS89vYNytnmmE9TeI9EB3d3MJTZBGAwi5G+yfUOX6rkDrpQ/4QCL5JHd3cwkR/Ub1U1BHHyQQ4XvussLWRCKUloIY7MLNVP8ACossbZWFrrdVXkpyhZjvxliEINg57Q6+wSChYfDaEIQgEqON0jg1u85JJNgSdw3rI0cTWRh+9zxf0VmOnKdK8l+MJsbWmNsUYsG8SvewdzCKb6nopK2xGmIy14haGEEkckGZrhaxzyTc/wBUpDfEOq6HO7u5hKb8jN2YPJSExVbmoPe8N+0oUYIQS+xZySJQIgCzInJOdoz7m+6anO2GhnxWPDNA32r+JTzGNe1rnZkpjYf9h9lIicGxtDiARwKAexrGkgZjNMdq/mn5HtLCAQTbcCo2w4DccvJA9F8za287JZjjAJIsAN6xdZj+D4OxzsUxOjpLnITTNaT0F7lMV2Jd7aBA75JzBH8QTRHbEVEhZWzujNgZHEciLp+KpY/InZdyKbqY9tu0PEFEsvOyVmtno45i9YZbhdIklZH4nWWN2ncz7ry5459VDazgdqJ3TZbm8AtuoGxvo4SB/AAVqlLGSds7hu81kaOrfSPu03ZxaTvWv09Jjcyx+pvE6rDPygRtBZkdya7V/NQP8R4LU1LqGPFKPvkbvjpzM0SD+U5qaASLtBI4W4rSy7SI2iRgc/M8166JgBIGYXkLg2MBxAPIlKe9paQHDdzR1H7V/NLi+YTt523Jrs3/AGn2TsHwE7fw9UDvYs5IXvaM+5vuhBDTtN4j0Su7+aZq54MMpZauqkEcETC6R7sg1o3koJb3BjS5xAAzJPAKvtJNZ+A4XM+KkL8SnBse7kbA6vOXtdV3p9p/W6TTPpaR76bCWmwjGTpxzf5f5ffy0sblbXH+VNsn4WJiOtzGpjbDqOkoxwc8GVw97D8LV67S3SPE3O7/AIzVyNP8DXdm32bZYNKZ4wrIrCvlJ45uLjcuO8nMlXLoHiP946M0rnOvJBeB/Vu78EKmeC3rVViHZYhVYc45Ts7VoPFzd/4/ZRyR7qWOdSs1RKmLZdtt3HepQQWhwIcMismSnOrZiyTSzHpcUfaPAG7ivHRuY/Z3lTII+zZbmsmLFyt225ssVr19y2iwAG4JurqI6SmlqJjaOJhe7oBdOrUtZmId00e7sw2krJBHl9o+J37Aeq9CsbnTzbTqNqoqaiSsnlqajOWZ5e/jmTdSqPHsXwstOHYpWU/kyU29jkoPRIl4LTpl23bDtaukdMQK11NXNAteSLYefVuX4W3YLrcwqqmZFitHPQkn6rXCSP8AGY9lS6FGaRKUXmHWdDW02IU0dTRTxTwSC7ZI3BwK9qcw31XMuiuk+I6L1wqMOk+U43mpnn4JR04Hz/fcuhNGceo9KcKZX0Li0bpI3eKJ/Fp/7mqbVmF1b7Tl6n+7+aFFM/dUrro0pdVVrdHqOT5EFnVeyfHJvDT5AZ+vkrQxzFG4Rg9ZiMzzsU0LpN+8gZD1NguY6molqqiWpqHl80z3SSOJvdzjcqzHG5V5LajRpCEK5QEpnjCSvWnZN0Dyn4FXnDMZo60HKKUF36TkfwSsc14OSVkcikuOhgQ4At3Hd0TdXVQUdNJUVUrYoYxd8jtwCxegFU7F9GqR5fd8Dewkcebcv2stjxHDKetwupopmgxzxOa+4z3b/TestuttuPjMxy8Kxr9Y9sTjdRUTZKOO4JkyfIOY+31/C3XBcZosapO8UEu2AQHsOTmE8CFRJ+FxAcHAZbQ3HzV3assMp6XRGCVtnvqyZpXHnuA9AFjwZLWtMPf9p+jwYMEWrHbMXuql1mYj3vHxSsPwUcYYf1nM/gt9lbuItZQ001W93yYY3SPJ4AC5XPdbUvrayeqlJ25nl5vwub2XoY472+ayz1owkS8Eom29NvdtZclcoJQhCOhbPq90ndoxpBHM9x7lUkRVTL5AXyf/AC3v0utYRwsuTHRE6ddMc1zQ5pBaRcEHeELR9V2NSYtofS9rK4z0jjTyfFmdnwn/AElqFnmNNUTuGP101L6bRFtNfZNXUsaejfjt7tCo1Wnr5ry/EsKw5rhaOF87x+ohrf6XKrFdjjpRkn3ghCFNAIQhHDkYyulpEZysloLH1M4l2VbX4Y52U7RPGP8AM3J34t7Ky8Zqe54PXVN7dlTvf7NKoHRjEThOkOH14NmxTASfoOTvwSrn1h1Ag0MxJ1x8yIMBB+4gLPm63Lb6SOd61/1QjQAGjyV3aqKnt9EI2E3ME0kZ8s7j91SStbUtPfD8Tpr+Cdkturbf7V5vp5999b7Zpv0v6llta2Kdw0WfTsd8yukEI/Tvd6WFvVUn0W8a3MTFZpHHRMN2UMVjy23WJ/GytGXsUjUPiLzuzx4uEynnmwTKkgEIQjoQhCC09RVU81OMUG9uxFM0eebT/tQsRqVqTBpw2O9mz0csduZBa4f0n3QqL+V9PCPrflfLp3VbZ+nBExvkLX/claWhCtr4VX+IIQhSRCEIRx605p7gEIQHlzVo6W1c1RqowmWV20+YQbZ52B/4CEKj1Xy5b/Zf1dFXjcrF1MyOGJ4ky/wmBh9if+UIXlYPmQ+y9qfSX/TR8cmkqcbxCeZ21JJUyOcf5ioKEL3H58bfmUhCEAhCEdCEIQbNq1kdFp1hBYfFK5p6FjkIQq7x2tpPT//Z';
  
  
  const profiless = [
    { name: 'muhammad ali', imageSrc: '', color: '#007bff' },
    { name: 'hojjat iranmanesh', imageSrc: '', color: '#28a745' },
    { name: 'Ali mombeni',  imageSrc: url ,color: '#007bff'},
  ];



  return(
    
    <div>
        <Avatars profiles={profiless} />
        <Avatars profiles={profiless} size={20}/>
        <Avatars profiles={profiless} overlap={0.5}/>
    </div>
  );


*/