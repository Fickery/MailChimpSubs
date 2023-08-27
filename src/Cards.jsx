import SubData from "./SubData";

export default function SubContainer() {
  return (
    <div className="container">
      <div className="cardMain">
        {SubData.data.subscription.map((item) => (
          <div key={item.id} className="subscription-card">
            <div className="cardTop">
              <div className="title">
                <h3 className="cardTitle">{item.header.title}</h3>
                <p className="cardDesc">{item.header.description}</p>
              </div>

              <div className="pricing">
                {item.pricing.freeTrial && (
                  <p>
                    <span className="freetrial-text">Free</span> for{" "}
                    <span className="duration-text">1 month</span>
                  </p>
                )}
                {item.pricing.title && (
                  <p className="titlePrice-box">
                    <span className="title-text">{item.pricing.title}</span>
                    <br />
                    <span
                      className={
                        item.header.title === "Premium" || item.header.title === "Free"
                          ? "special-price-text"
                          : "standard-price-text"
                      }>
                      <span className="dollar-sign">$</span>
                      {item.pricing.price}
                    </span>{" "}
                    <br />
                    <span className="basedOn-text">{item.pricing.basedOn}</span>
                  </p>
                )}
              </div>
            </div>
            <div className="cardBottom">
              <div className="subfeatures">
                <ul>
                  {item.features.map((feature) => (
                    <li
                      key={Object.keys(feature)[0]}
                      className={!feature.availability ? "disabled" : ""}>
                      {Object.values(feature)[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
