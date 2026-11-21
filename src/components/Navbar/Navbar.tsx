import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type MenuItem = {
  id: string;
  path: string;
  translationKey: string;
};

const menuItems: MenuItem[] = [
  {
    id: 'fullindex',
    path: '/indice/0',
    translationKey: 'fullindex',
  },
  {
    id: 'partialindex',
    path: '/indice/1',
    translationKey: 'partialindex',
  },
  {
    id: 'songsheet',
    path: '/fogliocanti',
    translationKey: 'songsheet',
  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#bbbbbb]">
      <div className="flex w-full">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="
              flex
              flex-1
              flex-col
              items-center
              justify-center
              border
              border-gray-400
              bg-transparent
              px-2
              py-[5px]
              leading-none
              text-gray-700
              hover:bg-gray-200
            "
          >
            <span className="text-xs">
              {t(item.translationKey)}
            </span>
          </button>
        ))}

        {/* Setting */}
        <div className="relative flex flex-1">
          <button
            type="button"
            onClick={() => setSettingsOpen((open) => !open)}
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              border
              border-gray-400
              bg-transparent
              px-2
              py-[5px]
              leading-none
              text-gray-700
              hover:bg-gray-200
            "
          >
            <span className="text-xs">
              {t('setting')}
            </span>
          </button>

          {settingsOpen && (
            <div
              className="
                absolute
                right-0
                top-full
                min-w-[160px]
                border
                border-gray-400
                bg-[#bbbbbb]
                shadow-md
              "
            >
              <button
                type="button"
                className="
                  block
                  w-full
                  border-b
                  border-gray-400
                  px-4
                  py-2
                  text-left
                  text-xs
                  text-gray-700
                  hover:bg-gray-200
                "
              >
                {t('language')}
              </button>

              <button
                type="button"
                className="
                  block
                  w-full
                  px-4
                  py-2
                  text-left
                  text-xs
                  text-gray-700
                  hover:bg-gray-200
                "
              >
                {t('logout')}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
