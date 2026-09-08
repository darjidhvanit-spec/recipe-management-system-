import "./Features.css";
import {
  FaCarrot,
  FaHeartbeat,
  FaUtensils,
  FaShippingFast,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="features">

      <div className="feature-card">

        <FaCarrot className="feature-icon" />

        <div>
          <h3>Fresh Ingredients</h3>
          <p>We use only fresh and high quality ingredients.</p>
        </div>

      </div>

      <div className="feature-card">

        <FaHeartbeat className="feature-icon" />

        <div>
          <h3>Healthy Recipes</h3>
          <p>Healthy recipes for your family.</p>
        </div>

      </div>

      <div className="feature-card">

        <FaUtensils className="feature-icon" />

        <div>
          <h3>Easy To Cook</h3>
          <p>Simple and easy recipes for everyone.</p>
        </div>

      </div>

      <div className="feature-card">

        <FaShippingFast className="feature-icon" />

        <div>
          <h3>Fast Delivery</h3>
          <p>Get your favorite food delivered.</p>
        </div>

      </div>

    </section>
  );
};

export default Features;