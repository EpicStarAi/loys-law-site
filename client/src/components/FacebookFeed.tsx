import { useEffect } from "react";

interface FacebookFeedProps {
  pageId?: string;
  width?: number;
  height?: number;
  tabs?: "timeline" | "events" | "messages";
}

declare global {
  interface Window {
    FB: {
      init: (params: any) => void;
      XFBML: {
        parse: () => void;
      }
    };
  }
}

export function FacebookFeed({ 
  pageId = "YourPageId", // Замените на реальный ID страницы Facebook
  width = 500, 
  height = 600,
  tabs = "timeline"
}: FacebookFeedProps) {
  useEffect(() => {
    // Загружаем Facebook SDK если еще не загружен
    if (!window.FB) {
      const initFacebook = () => {
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v18.0';
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.onload = () => {
          if (window.FB) {
            window.FB.init({
              appId: 'your-app-id', // Замените на реальный App ID
              xfbml: true,
              version: 'v18.0'
            });
          }
        };
        document.head.appendChild(script);
      };

      initFacebook();
    } else {
      // Если FB уже загружен, просто парсим элементы
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="facebook-feed">
      <div id="fb-root"></div>
      <div 
        className="fb-page" 
        data-href={`https://www.facebook.com/${pageId}`}
        data-tabs={tabs}
        data-width={width}
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote 
          cite={`https://www.facebook.com/${pageId}`} 
          className="fb-xfbml-parse-ignore"
        >
          <p>
            <a href={`https://www.facebook.com/${pageId}`} target="_blank" rel="noopener noreferrer">
              Наша сторінка у Facebook
            </a>
          </p>
        </blockquote>
      </div>
    </div>
  );
}