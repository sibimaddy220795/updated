import React from 'react';
import './social.css';

const Social = () => {
  return (
    <div>
      <div class="box">
            <div class="container">
                <div class="icon facebook">
                    <div class="tooltip">
                        Facebook
                    </div>
                    <span><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"/></a></span>
                </div>

                <div class="icon youtube">
                    <div class="tooltip">
                        Youtube
                    </div>
                    <span><a href="https://www.youtube.com/"><i class="fab fa-youtube"/></a></span>
                </div>

                <div class="icon twitter">
                    <div class="tooltip">
                        Twitter
                    </div>
                    <span><a href="https://twitter.com/i/flow/login"><i class="fab fa-twitter"/></a></span>
                </div>

                <div class="icon instagram">
                    <div class="tooltip">
                        Instagram
                    </div>
                    <span><a href="https://www.instagram.com/"><i class="fab fa-instagram"/></a></span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Social;
