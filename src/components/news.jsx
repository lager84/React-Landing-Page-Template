import React from "react";

export const News = (props) => {

  React.useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="news">
      <div className="container">
        <div className="section-title text-center">
          <h2>Новости</h2>
        </div>
        
         {/* <script data-telegram-post="arhizpark/1208" data-width="100%"></script> */}
        
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-content">
                    <script data-telegram-post={d.post} data-width="100%"></script>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
