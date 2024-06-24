"use client"

import { fetchGalleryCard } from '@/sanity/lib/fetch';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path as necessary
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'; // Importing icons

// Interface for Gallery Card Project
interface GalleryCardProject {
  projectid: string;
  project_name: string;
  projectbannerUrl: string;
}

// Modal Component
const Modal = ({
  isVisible,
  onClose,
  onNext,
  onPrevious,
  children
}: {
  isVisible: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  children: React.ReactNode;
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white w-full max-w-4xl h-auto md:h-[90vh] flex items-center justify-center md:rounded-lg overflow-hidden">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 z-60"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-60"
          onClick={onPrevious}
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-60"
          onClick={onNext}
        >
          <FaChevronRight size={24} />
        </button>
        <div className="flex items-center justify-center w-full h-full p-4 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const ServiceProjects = () => {
  const [projects, setProjects] = useState<GalleryCardProject[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await fetchGalleryCard();
        setProjects(projectData);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjects();
  }, []);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < projects.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const showPreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <div className="my-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={project.projectid} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-0">
                    <div
                      className="w-full h-[430px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => openModal(index)}
                    >
                      <Image
                        src={project.projectbannerUrl}
                        alt={project.project_name}
                        width={400}
                        height={300}
                        style={{ objectFit: 'cover' }}
                        className="w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        onNext={showNextImage}
        onPrevious={showPreviousImage}
      >
        {selectedImageIndex !== null && (
          <div className="relative w-full h-full">
            <Image
              src={projects[selectedImageIndex].projectbannerUrl}
              alt={projects[selectedImageIndex].project_name}
              layout="fill"
              objectFit="cover"
              className="p-4 md:p-8"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ServiceProjects;
