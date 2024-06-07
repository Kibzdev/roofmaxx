import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { sanityClient, urlFor } from '../../../sanity/lib/sanityclient';
import clsx from 'clsx';

interface ProjectBannerProps {
  serviceId: string;
}

interface Project {
  projectbanner: {
    asset: {
      _ref: string;
    };
  };
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({ serviceId }) => {
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const query = `*[_type == "project" && projectid == $serviceId][0]{ projectbanner }`;
        const params = { serviceId };
        const project: Project = await sanityClient.fetch(query, params);
        const imageUrl = project?.projectbanner ? urlFor(project.projectbanner).url() : null;
        setBannerUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching project banner:', error);
      }
    };

    fetchBanner();
  }, [serviceId]);

  return (
    <div className={clsx("relative w-full h-64 sm:h-96 bg-gray-300")}>
      {bannerUrl ? (
        <Image
          src={bannerUrl}
          alt="Project Banner"
          className="object-cover w-full h-full"
          layout="fill"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ProjectBanner;
