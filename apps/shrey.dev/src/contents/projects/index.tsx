import clsx from 'clsx';
import { useState } from 'react';

import {
  GitHubIcon,
  JavaIcon,
  MavenIcon,
  NextJsIcon,
  NpmIcon,
  SpringBootIcon,
  TailwindCssIcon,
} from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import GitHubPackageWireframe from '@/components/wireframes/GithubPackage';
import NpmWireframe from '@/components/wireframes/Npm';

import Accordion from './Accordian';

function generateDependency(
  groupId: string,
  artifactId: string,
  version: string
): string {
  return `
    <dependency>
      <groupId>${groupId}</groupId>
      <artifactId>${artifactId}</artifactId>
      <version>${version}</version>
    </dependency>
  `;
}

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github' | 'maven'>(
    'github'
  );
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="content-wrapper">
      <Accordion
        title="EazySchool"
        isOpen={openAccordion === 0}
        onClick={() => handleAccordionClick(0)}
        index={1}
        icons={[
          <JavaIcon
            className={clsx(
              'h-5 w-5 transition duration-200 hover:text-[#cf0202]'
            )}
          />,
          <MavenIcon
            className={clsx(
              'h-6 w-6 transition duration-200 hover:text-[#961754]'
            )}
          />,
          <SpringBootIcon
            className={clsx(
              'h-5 w-5 transition duration-200 hover:text-[#4ae757]'
            )}
          />,
        ]}
        progress={60}
      >
        <SectionTitle
          title="Eazyschool-Java"
          caption="Java"
          description="
          EazySchool is a web-based school management system built using Spring Boot, Spring MVC, Spring Data JPA, and MySQL. It streamlines administrative tasks like student registration, course management, contact forms, and login authentication. The project follows a layered architecture with proper MVC design, form validation, and data persistence features."
          buttons={[
            {
              title: 'learn more',
              href: 'https://github.com/beingnikil07/EazySchool',
            },
          ]}
        />
        <SectionContent>
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}
            >
              <div className={clsx('flex flex-col gap-3')}>
                <SectionButton
                  title="Available on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description="You can refer to my repository"
                  active={currentState === 'github'}
                  onClick={() => setCurrentState('github')}
                />
                <SectionButton
                  title="Maven package"
                  icon={<MavenIcon className={clsx('my-2 h-16 w-16')} />}
                  description="Install and use the package with ease from github maven artifactory."
                  active={currentState === 'maven'}
                  onClick={() => setCurrentState('maven')}
                />
              </div>
            </div>
            <div className={clsx('w-full', 'lg:w-auto')}>
              <div className={clsx('-mt-[41px]')}>
                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                  <AppWindow
                    type="browser"
                    browserTabs={[
                      {
                        icon: <GitHubIcon className="h-4 w-4" />,
                        title: 'beingnikil07/Eazyschool - GitHub',
                        isActive: currentState === 'github',
                      },
                      {
                        icon: <MavenIcon className="h-4 w-4" />,
                        title: 'com.github.beingnikil07.java',
                        isActive: currentState === 'maven',
                      },
                    ]}
                  >
                    {currentState === 'github' && (
                      <GitHubWireframe
                        author="Nikhil Kumar Rana"
                        license="Apache-2.0 license"
                        repository="Eazyschool-java"
                        description="EazySchool is a Spring Boot-based school management system for handling admissions, courses, contacts, and user authentication efficiently."
                      />
                    )}
                    {currentState === 'maven' && (
                      <GitHubPackageWireframe
                        packageName="com.github.eazyschool"
                        version="1.0.0 SNAPSHOT"
                        dependency={generateDependency(
                          'com.github.eazyschool',
                          'eazyschool.java',
                          '1.0.0-SNAPSHOT'
                        )}
                      />
                    )}
                  </AppWindow>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Accordion>
      <Accordion
        title="Deep-Talk AI"
        isOpen={openAccordion === 1}
        onClick={() => handleAccordionClick(1)}
        index={2}
        icons={[
          <JavaIcon
            className={clsx(
              'h-5 w-5 transition duration-200 hover:text-[#cf0202]'
            )}
          />,
          <SpringBootIcon
            className={clsx(
              'h-5 w-5 transition duration-200 hover:text-[#4ae757]'
            )}
          />,
          <MavenIcon
            className={clsx(
              'h-6 w-6 transition duration-200 hover:text-[#961754]'
            )}
          />,
        ]}
        progress={100}
      >
        <SectionTitle
          title="Deep-Talk AI"
          caption="Java"
          description="DeepTalk is an AI-powered Q&A app that uses the Gemini API to provide accurate, real-time answers to user queries."
          buttons={[
            {
              title: 'learn more',
              href: 'https://github.com/beingnikil07/DeepTalk-AI',
            },
          ]}
        />
        <SectionContent>
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}
            >
              <div className={clsx('flex flex-col gap-3')}>
                <SectionButton
                  title="Available on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description="An AI-powered chatbot"
                  active={currentState === 'github'}
                  onClick={() => setCurrentState('github')}
                />
                <SectionButton
                  title="Maven package"
                  icon={<MavenIcon className={clsx('my-2 h-16 w-16')} />}
                  description="Install and use the package with ease from github maven artifactory."
                  active={currentState === 'maven'}
                  onClick={() => setCurrentState('maven')}
                />
              </div>
            </div>
            <div className={clsx('w-full', 'lg:w-auto')}>
              <div className={clsx('-mt-[41px]')}>
                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                  <AppWindow
                    type="browser"
                    browserTabs={[
                      {
                        icon: <GitHubIcon className="h-4 w-4" />,
                        title: 'Nikhil Rana/Deep-Talk - GitHub',
                        isActive: currentState === 'github',
                      },
                      {
                        icon: <MavenIcon className="h-4 w-4" />,
                        title: 'com.github.nikhil.deeptalk',
                        isActive: currentState === 'maven',
                      },
                    ]}
                  >
                    {currentState === 'github' && (
                      <GitHubWireframe
                        author="Nikhil Kumar Rana"
                        license="Apache-2.0 license"
                        repository="Deep-Talk AI"
                        description="This is a java application that provides the accurate,real-time answers of user queries."
                      />
                    )}
                    {currentState === 'maven' && (
                      <GitHubPackageWireframe
                        packageName="com.github.deeptalk"
                        version="1.0.0 SNAPSHOT"
                        dependency={generateDependency(
                          'com.github.nikhil',
                          'deeptalk',
                          '1.0.0-SNAPSHOT'
                        )}
                      />
                    )}
                  </AppWindow>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Accordion>
      <Accordion
        title="Phonebook Manager"
        isOpen={openAccordion === 2}
        onClick={() => handleAccordionClick(2)}
        index={3}
        icons={[
          <SpringBootIcon
            className={clsx(
              'h-5 w-5 transition duration-200 hover:text-[rgb(79,230,86)] dark:hover:text-[rgb(73,213,90)]'
            )}
          />,
          <JavaIcon
            className={clsx(
              'h-5 w-5 transition duration-200 hover:text-[#06B6D4]'
            )}
          />,
        ]}
        progress={100}
      >
        <SectionTitle
          title="Phonebook Manager"
          caption="Spring Boot"
          description="The Phonebook backend is a RESTful API built with Java and Spring Boot to manage contacts—supporting CRUD operations and data persistence."
          buttons={[
            {
              title: 'learn more',
              href: 'https://github.com/beingnikil07/Phonebook-Manager-Backend',
            },
          ]}
        />
        <SectionContent>
          <div className={clsx('flex', 'lg:gap-12')}>
            <div
              className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}
            >
              <div className={clsx('flex flex-col gap-3')}>
                <SectionButton
                  title="Available on GitHub"
                  icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                  description="The Phonebook backend is a RESTful API built with Java and Spring Boot to manage contacts—supporting operations"
                  active={currentState === 'github'}
                  onClick={() => setCurrentState('github')}
                />
              </div>
            </div>
            <div className={clsx('w-full', 'lg:w-auto')}>
              <div className={clsx('-mt-[41px]')}>
                <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                  <AppWindow
                    type="browser"
                    browserTabs={[
                      {
                        icon: <GitHubIcon className="h-4 w-4" />,
                        title: 'beingnikhil07 - GitHub',
                        isActive: currentState === 'github',
                      },
                    ]}
                  >
                    {currentState === 'github' && (
                      <GitHubWireframe
                        author="Nikhil Kumar Rana"
                        license="Apache-2.0 license"
                        repository="Phonebook Manager"
                        description="The Phonebook backend is a RESTful API built with Java and Spring Boot to manage contacts—supporting operations"
                      />
                    )}
                  </AppWindow>
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Accordion>
    </div>
  );
}

export default ProjectsContents;
