import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner';
import cn from "classNames"
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import { CategoryService } from '@/services/category.service';

const Sidebar: FC = () => {
  const { data, isLoading } = useQuery(
    ['get categories'],
    () => CategoryService.getAll(),
    {
      select: ({ data }) => data,
    },
  );

  const { asPath } = useRouter();

  const { user } = useAuth();
  const { logout } = useActions();

  return (
    <aside
      className="bg-secondary flex flex-col justify-between"
      style={{
        height: 'calc(100vh - 91px)',
      }}
    >
      <div>
        {isLoading ? (
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : data ? (
          <>
            <div className="text-xl text-white mt-4 mb-6 ml-6">Categoires:</div>
            <ul>
              {data.map((category) => (
                <li key={category.id}>
                  <Link
                    className={cn(
                      'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
                      asPath === `category/${category.slug}`
                        ? 'text-primary'
                        : 'text-white',
                    )}
                    href={`category/${category.slug}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div>Categories not found!</div>
        )}
      </div>
      {!!user && (
        <button
          onClick={() => logout()}
          className="text-white flex items-center ml-10 mb-10"
        >
          <FiLogOut />
          <span className="ml-2">Logout</span>
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
