import { Container, Page, PortableTextComponents } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PortableTextComponents> = {
  title: 'Components/Portable Text Components',
  component: PortableTextComponents,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'The value to be rendered',
      control: {
        type: 'object',
      },
    },
    onMissingComponent: {
      description: 'If true, the component will return null if the component is not found',
      control: {
        type: 'boolean',
      },
    },
    components: {
      description: 'The components to be used in the Portable Text',
      control: {
        type: 'object',
      },
    },
    dataset: {
      description: 'The dataset to be used in the Portable Text',
      control: {
        type: 'text',
      },
    },
    projectId: {
      description: 'The project id to be used in the Portable Text',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PortableTextComponents>;

export const Default: Story = {
  render: (args) => (
    <Page>
      <Container>
        <PortableTextComponents {...args} />
      </Container>
    </Page>
  ),
  args: {
    value: [
      {
        _key: '952f4a7e61b2',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Testing is a crucial part of modern web development, ensuring that applications are reliable, maintainable, and bug-free. With the rise of powerful tools like Jest and React Testing Library, writing tests for your React applications has never been easier. This guide will walk you through integrating Jest and React Testing Library with a ReactJS project using TypeScript, and provide you with the basics of writing effective tests.',
            _key: '7f590fe79c7c0',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: '49aba682cd1e',
        markDefs: [],
        children: [{ marks: [], text: '', _key: '863951e22234', _type: 'span' }],
        _type: 'block',
      },
      {
        children: [{ marks: [], text: 'Prerequisites', _key: '1c0bdb41207d0', _type: 'span' }],
        _type: 'block',
        style: 'h2',
        _key: '8d9de64d2527',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '9237df13b377',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Before integrating Jest and React Testing Library with your React TypeScript project, ensure you have the following:',
            _key: 'bff2bf6235d80',
          },
        ],
        _type: 'block',
      },
      {
        children: [{ text: 'Basic Knowledge:', _key: 'ab3183459fcc0', _type: 'span', marks: [] }],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '4018fc4792ea',
        listItem: 'number',
        markDefs: [],
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Familiarity with React and TypeScript.',
            _key: '9834f4b8b8770',
          },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
        _key: '43068445d8d5',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        listItem: 'number',
        markDefs: [],
        children: [{ _key: 'e0ac7898cab70', _type: 'span', marks: [], text: 'Node.js and pnpm:' }],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '1c3d32b5dc21',
      },
      {
        _key: '95ed9bc785ee',
        listItem: 'bullet',
        markDefs: [{ _key: '5aa6d43aa307', _type: 'link', href: 'https://nodejs.org/' }],
        children: [
          {
            _key: '97860625b5bb0',
            _type: 'span',
            marks: [],
            text: 'Install Node.js from ',
          },
          {
            text: 'nodejs.org',
            _key: '97860625b5bb1',
            _type: 'span',
            marks: ['5aa6d43aa307'],
          },
          { _type: 'span', marks: [], text: '.', _key: '97860625b5bb2' },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '6386f612a53e',
        listItem: 'bullet',
        markDefs: [{ _type: 'link', href: 'https://pnpm.io/', _key: '4434ac3fc770' }],
        children: [
          { _type: 'span', marks: [], text: 'Install pnpm from ', _key: '355c7e00ba310' },
          {
            _type: 'span',
            marks: ['4434ac3fc770'],
            text: 'pnpm.io',
            _key: '355c7e00ba311',
          },
          { text: '.', _key: '355c7e00ba312', _type: 'span', marks: [] },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: 'ca9c1e7d2bb1',
        listItem: 'number',
        markDefs: [],
        children: [{ _key: '217eac1687c80', _type: 'span', marks: [], text: 'Code Editor:' }],
        level: 1,
        _type: 'block',
      },
      {
        children: [
          {
            text: 'Use an editor like Visual Studio Code.',
            _key: 'c0eb6b697e370',
            _type: 'span',
            marks: [],
          },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
        _key: '709179744fda',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '83233560bc50',
        listItem: 'number',
        markDefs: [],
        children: [{ _type: 'span', marks: [], text: 'Vite:', _key: '23b99cf10bb40' }],
        level: 1,
        _type: 'block',
      },
      {
        children: [
          {
            text: 'Familiarity with Vite is helpful. Learn more ',
            _key: '41a1997479730',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['77c4b1bd0379'],
            text: 'here',
            _key: '41a1997479731',
          },
          { text: '.', _key: '41a1997479732', _type: 'span', marks: [] },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
        _key: 'a86f5035d57f',
        listItem: 'bullet',
        markDefs: [{ href: 'https://vitejs.dev/', _key: '77c4b1bd0379', _type: 'link' }],
      },
      {
        _key: '7eac13e1ac7b',
        listItem: 'number',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Command Line Basics:',
            _key: 'b6615af1d9e20',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Basic terminal navigation and command execution.',
            _key: 'd835279ae2890',
            _type: 'span',
          },
        ],
        level: 2,
        _type: 'block',
        style: 'normal',
        _key: '7eaae474d458',
        listItem: 'bullet',
      },
      {
        markDefs: [],
        children: [{ _key: '08aba9145b5a', _type: 'span', marks: [], text: '' }],
        _type: 'block',
        style: 'normal',
        _key: '9a250d963d71',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Setting Up the Environment',
            _key: '90bf376d51a30',
            _type: 'span',
            marks: [],
          },
        ],

        _type: 'block',

        style: 'h2',

        _key: '9b718874d6d1',
      },

      {
        markDefs: [],

        children: [
          {
            marks: [],

            text: "To get started, we'll create a new React project using Vite with the TypeScript template and install the necessary dependencies for testing.",

            _key: '1f8a15248dcf0',

            _type: 'span',
          },
        ],

        _type: 'block',

        style: 'normal',

        _key: 'a904e4ca4387',
      },

      {
        _type: 'block',

        style: 'normal',

        _key: '05a6c4f43495',

        markDefs: [],

        children: [{ _type: 'span', marks: [], text: '', _key: 'ce9e21362c5f' }],
      },

      {
        children: [
          {
            text: 'Create a new React project:',

            _key: '856e784d3c9d',

            _type: 'span',

            marks: [],
          },
        ],

        _type: 'block',

        style: 'h3',

        _key: '0b2d1633cf25',

        markDefs: [],
      },

      {
        _key: 'bd4d8a5dca28',

        code:
          'pnpm create vite react-jest-blog --template react-ts\n' +
          '\n' +
          '# install dependencies\n' +
          '\n' +
          'pnpm install\n' +
          '',

        _type: 'code',

        language: 'sh',
      },

      {
        markDefs: [],

        children: [
          {
            marks: [],

            text: 'Install Jest, React Testing Library, and related TypeScript types:',

            _key: 'a8bedc84df7a0',

            _type: 'span',
          },
        ],

        _type: 'block',

        style: 'h3',

        _key: '2d23efec7d83',
      },

      {
        _key: 'afd930a9e2bf',

        code: 'pnpm add -D jest@29.7.0 jest-environment-jsdom@29.7.0 ts-jest@29.2.3 ts-node@10.9.2 identity-obj-proxy@3.0.0 @testing-library/jest-dom@6.4.8 @testing-library/react@16.0.0 @types/jest@29.5.12',

        _type: 'code',

        language: 'sh',
      },

      {
        markDefs: [],

        children: [
          { _type: 'span', marks: ['strong'], text: 'Note', _key: '5b7388822c230' },

          {
            _key: '5b7388822c231',

            _type: 'span',

            marks: [],

            text: ": When following this guide, it's important to use the specified versions of the packages to avoid potential issues. If you choose to use different versions, please refer to the package changelogs to ensure compatibility and prevent any unexpected problems.",
          },
        ],

        _type: 'block',

        style: 'blockquote',

        _key: '442b06f14b66',
      },

      {
        _type: 'block',

        style: 'h2',

        _key: '00faf4851557',

        markDefs: [],

        children: [
          {
            _key: '134ab4cb7ea80',

            _type: 'span',

            marks: [],

            text: 'Configuring Jest with TypeScript',
          },
        ],
      },

      {
        children: [
          {
            _type: 'span',

            marks: [],

            text: "To configure Jest to work with TypeScript, we'll create and modify the necessary configuration files.",

            _key: 'cefe94107e6f0',
          },
        ],

        _type: 'block',

        style: 'normal',

        _key: 'd6651f02d174',

        markDefs: [],
      },

      {
        _type: 'block',

        style: 'normal',

        _key: 'c9af1064c758',

        markDefs: [],

        children: [{ _type: 'span', marks: [], text: '', _key: 'a1ecd523ad33' }],
      },

      {
        children: [
          {
            marks: [],

            text: 'Create the jest.config.ts file at the root project level:',

            _key: '85a426106f1a',

            _type: 'span',
          },
        ],

        _type: 'block',

        style: 'h3',

        _key: '6a290031c173',

        markDefs: [],
      },

      {
        code:
          "import type { Config } from 'jest';\n" +
          '\n' +
          'const config: Config = {\n' +
          "  preset: 'ts-jest',\n" +
          '  moduleNameMapper: {\n' +
          "    '\\.(css|scss)$': 'identity-obj-proxy',\n" +
          '    "^.+\\.svg": "<rootDir>/tests/mocks/svgMock.tsx"\n' +
          '  },\n' +
          '  // to obtain access to the matchers.\n' +
          "  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],\n" +
          "  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n" +
          "  modulePaths: ['<rootDir>'],\n" +
          "  testEnvironment: 'jsdom',\n" +
          '  transform: {\n' +
          "    '^.+\\.(ts|tsx)$': ['ts-jest', {\n" +
          "      tsconfig: 'tsconfig.test.json',\n" +
          '    }],\n' +
          "    '^.+\\.(js|jsx)$': 'babel-jest',\n" +
          '  },\n' +
          '};\n' +
          '\n' +
          'export default config;',

        _type: 'code',

        language: 'typescript',

        _key: '6010ce809dea',
      },

      {
        style: 'h3',

        _key: 'a92f591bb0cf',

        markDefs: [],

        children: [
          {
            text: 'Create tests/mocks/svgMock.tsx:',

            _key: '4a36e09818a70',

            _type: 'span',

            marks: [],
          },
        ],

        _type: 'block',
      },

      {
        language: 'typescript',

        _key: '299f357d21ac',

        code: 'export default "SvgrURL";\nexport const ReactComponent = "div";\n',

        _type: 'code',
      },

      {
        style: 'normal',

        _key: '3637a49ec891',

        markDefs: [],

        children: [
          {
            marks: [],

            text: 'Configure Jest to work properly with SVGR.',

            _key: 'd40efb7da0bf',

            _type: 'span',
          },
        ],

        _type: 'block',
      },

      {
        style: 'normal',

        _key: '41d43e40a55f',

        markDefs: [],

        children: [{ text: '', _key: '8382c326a42e', _type: 'span', marks: [] }],

        _type: 'block',
      },

      {
        children: [
          {
            _key: '5a0aaf9039730',

            _type: 'span',

            marks: [],

            text: 'Create /tests/setupTests.ts:',
          },
        ],

        _type: 'block',

        style: 'h3',

        _key: '11018b0dd499',

        markDefs: [],
      },

      {
        _type: 'code',

        language: 'typescript',

        _key: '6f52d4db5a02',

        code: "import '@testing-library/jest-dom';\n",
      },

      {
        markDefs: [],

        children: [
          { text: 'The ', _key: '70dc9394fb010', _type: 'span', marks: [] },
          {
            _key: '3d8bb03d25b5',

            _type: 'span',

            marks: ['code'],

            text: 'setupTests.ts',
          },
          {
            text: ' file is used to configure or set up the testing framework before each test. Importing ',

            _key: '83d0eeae361c',

            _type: 'span',

            marks: [],
          },
          {
            marks: ['code'],

            text: '@testing-library/jest-dom',

            _key: 'e41e4df232ca',

            _type: 'span',
          },
          {
            text: ' provides additional matchers for Jest that are useful for testing DOM nodes, such as ',

            _key: '76e4ad94646e',

            _type: 'span',

            marks: [],
          },
          {
            _key: '8b93ceb9b1c0',

            _type: 'span',

            marks: ['code'],

            text: 'toBeInTheDocument()',
          },
          { marks: [], text: '.', _key: '45f3a7f1f706', _type: 'span' },
        ],

        _type: 'block',

        style: 'normal',

        _key: '02db989bdcbb',
      },

      {
        style: 'h3',

        _key: '456559a6384b',

        markDefs: [],

        children: [
          {
            text: 'Create tsconfig.test.json file under the project root level:',

            _key: '470efca546890',

            _type: 'span',

            marks: [],
          },
        ],

        _type: 'block',
      },

      {
        markDefs: [],

        children: [{ _type: 'span', marks: [], text: '', _key: 'c5e6417909ca' }],

        _type: 'block',

        style: 'normal',

        _key: '44687f76d28a',
      },

      {
        code:
          '{\n' +
          '  "compilerOptions": {\n' +
          '   "target": "ESNext",\n' +
          '   "module": "ESNext",\n' +
          '   "moduleResolution": "node",\n' +
          '   "esModuleInterop": true,\n' +
          '   "skipLibCheck": true,\n' +
          '   "strict": true,\n' +
          '   "jsx": "react-jsx",\n' +
          '   "types": ["jest", "@testing-library/jest-dom"]\n' +
          '  },\n' +
          '  "include": ["**/*.test.tsx", "**/*.test.ts", "./jest.config.ts", "tests", "src"]\n' +
          '}\n' +
          '',

        _type: 'code',

        language: 'json',

        _key: '444f80268a2a',
      },

      {
        children: [
          {
            _key: '67f8927dd75f0',

            _type: 'span',

            marks: [],

            text: 'Update package.json file to add the following scripts:',
          },
        ],

        _type: 'block',

        style: 'h3',

        _key: '58732122d725',

        markDefs: [],
      },

      {
        highlightedLines: [6, 7],

        code:
          '"scripts": {\n' +
          '  "dev": "vite",\n' +
          '  "build": "tsc -b && vite build",\n' +
          '  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",\n' +
          '  "preview": "vite preview",\n' +
          '  "test": "jest",\n' +
          '  "test:watch": "jest --watch"\n' +
          '},\n' +
          '',

        _type: 'code',

        language: 'json',

        _key: 'ad6b4220958c',
      },

      {
        _key: 'ec52a149e1c6',

        markDefs: [],

        children: [
          {
            _type: 'span',

            marks: [],

            text: 'Update tsconfig.app.json by adding the following:',

            _key: 'eddd27c7e7fa0',
          },
        ],

        _type: 'block',

        style: 'h3',
      },

      {
        language: 'json',

        _key: 'd82a71f4872a',

        highlightedLines: [3],

        code: '"include": [\n  "src", \n  "tests/setupTests.ts"\n]\n',

        _type: 'code',
      },

      {
        style: 'h2',

        _key: '87d4e86fdff5',

        markDefs: [],

        children: [
          {
            _type: 'span',

            marks: [],

            text: 'Writing Your First Test',

            _key: '292791034e0d0',
          },
        ],

        _type: 'block',
      },

      {
        _type: 'block',

        style: 'normal',

        _key: '4f228fd290b6',

        markDefs: [],

        children: [
          {
            marks: [],

            text: 'With the initial Vite-generated code in ',

            _key: '2088fe42f0230',

            _type: 'span',
          },

          { _type: 'span', marks: ['code'], text: 'App.tsx', _key: '8c3357d74a9d' },

          {
            _key: '900dee0aad30',

            _type: 'span',

            marks: [],

            text: ", let's write a set of comprehensive tests using Jest and React Testing Library.",
          },
        ],
      },

      {
        style: 'h3',

        _key: '259469230b03',

        markDefs: [],

        children: [
          {
            _key: '8bcc794d06730',

            _type: 'span',

            marks: [],

            text: 'Detailed Tests for the App Component:',
          },
        ],

        _type: 'block',
      },

      {
        style: 'normal',

        _key: '232db339ab06',

        markDefs: [],

        children: [
          {
            marks: ['code'],

            text: 'App.test.tsx',

            _key: '7c3abb1a37d3',

            _type: 'span',
          },
        ],

        _type: 'block',
      },

      {
        code:
          'import { render, screen, fireEvent } from "@testing-library/react";\n' +
          'import App from "./App";\n' +
          '\n' +
          'describe("App", () => {\n' +
          '  it("renders the App component", () => {\n' +
          '    render(<App />);\n' +
          '    expect(screen.getByText("count is 0")).toBeInTheDocument();\n' +
          '  });\n' +
          '\n' +
          '  it("should render a heading 1", () => {\n' +
          '    render(<App />);\n' +
          '    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(\n' +
          '      "Vite + React"\n' +
          '    );\n' +
          '  });\n' +
          '\n' +
          '  describe("logos", () => {\n' +
          '    it("should render a Vite logo", () => {\n' +
          '      render(<App />);\n' +
          '      const img = screen.getByAltText("Vite logo");\n' +
          '      expect(img).toBeInTheDocument();\n' +
          '    });\n' +
          '\n' +
          '    it("should render a Vite link", () => {\n' +
          '      const { container } = render(<App />);\n' +
          '      const viteLogo = container.querySelector("a[href=\'https://vitejs.dev\']");\n' +
          '      expect(viteLogo).toBeInTheDocument();\n' +
          '    });\n' +
          '\n' +
          '    it("should render a React logo", () => {\n' +
          '      render(<App />);\n' +
          '      const img = screen.getByAltText("React logo");\n' +
          '      expect(img).toBeInTheDocument();\n' +
          '    });\n' +
          '\n' +
          '    it("should render a React link", () => {\n' +
          '      const { container } = render(<App />);\n' +
          '      const reactLogo = container.querySelector("a[href=\'https://react.dev\']");\n' +
          '      expect(reactLogo).toBeInTheDocument();\n' +
          '    });\n' +
          '  });\n' +
          '\n' +
          '  describe("Card", () => {\n' +
          '    it("should render a card", () => {\n' +
          '      const { container } = render(<App />);\n' +
          '      const card = container.querySelector(".card");\n' +
          '      expect(card).toBeInTheDocument();\n' +
          '    });\n' +
          '\n' +
          '    it("should render a button", () => {\n' +
          '      render(<App />);\n' +
          '      expect(screen.getByRole("button")).toHaveTextContent("count is 0");\n' +
          '    });\n' +
          '\n' +
          '    it("increments the count when the button is clicked", () => {\n' +
          '      render(<App />);\n' +
          '      const button = screen.getByRole("button");\n' +
          '      fireEvent.click(button);\n' +
          '      expect(screen.getByText("count is 1")).toBeInTheDocument();\n' +
          '    });\n' +
          '\n' +
          '    it("should render a paragraph", () => {\n' +
          '      const { container } = render(<App />);\n' +
          '      const paragraph = container.querySelector("p");\n' +
          '      expect(paragraph).toBeInTheDocument();\n' +
          '      expect(paragraph).toHaveTextContent(\n' +
          '        "Edit src/App.tsx and save to test HMR"\n' +
          '      );\n' +
          '    });\n' +
          '\n' +
          '    it("should render a code element", () => {\n' +
          '      const { container } = render(<App />);\n' +
          '      const code = container.querySelector("code");\n' +
          '      expect(code).toBeInTheDocument();\n' +
          '      expect(code).toHaveTextContent("src/App.tsx");\n' +
          '    });\n' +
          '  });\n' +
          '\n' +
          '  describe("read-the-docs", () => {\n' +
          '    it("should render a paragraph", () => {\n' +
          '      const { container } = render(<App />);\n' +
          '      const paragraph = container.querySelector("p");\n' +
          '      expect(paragraph).toBeInTheDocument();\n' +
          '    });\n' +
          '\n' +
          '    it("should render a paragraph with the class \'read-the-docs\'", () => {\n' +
          '      const { container } = render(<App />);\n' +
          '      const paragraph = container.querySelector("p.read-the-docs");\n' +
          '      expect(paragraph).toBeInTheDocument();\n' +
          '    });\n' +
          '\n' +
          '    it("should render a paragraph with the text \'Click on the Vite and React logos to learn more\'", () => {\n' +
          '      render(<App />);\n' +
          '      expect(\n' +
          '        screen.getByText(/Click on the Vite and React logos to learn more/i)\n' +
          '      ).toBeInTheDocument();\n' +
          '    });\n' +
          '  });\n' +
          '});\n' +
          '',

        _type: 'code',

        language: 'tsx',

        _key: 'ffd61af8e2ad',
      },

      {
        style: 'h2',

        _key: '80d6b7013b49',

        markDefs: [],

        children: [{ _key: '2137172f4dfd0', _type: 'span', marks: [], text: 'Conclusion' }],

        _type: 'block',
      },

      {
        _key: '308f4d63bb30',

        markDefs: [],

        children: [
          {
            text: 'Integrating Jest and React Testing Library with a Vite and React TypeScript project is straightforward and highly beneficial. By following this guide, you have set up a testing environment that enhances your development workflow and helps ensure your code is reliable, maintainable, and bug-free. With the foundations laid out, you can confidently write and run tests, catching potential issues early and improving the overall quality of your application.',

            _key: 'f7f4d6097e0e0',

            _type: 'span',

            marks: [],
          },
        ],

        _type: 'block',

        style: 'normal',
      },

      {
        children: [
          {
            _key: '104ba8529d500',

            _type: 'span',

            marks: [],

            text: 'Remember, the practices and configurations discussed here are just the beginning. As your project grows, continue to explore more advanced testing techniques, tools, and best practices to keep your codebase in top shape. Happy testing!',
          },
        ],

        _type: 'block',

        style: 'normal',

        _key: '1af7a482f358',

        markDefs: [],
      },

      {
        _key: 'c003ca7c873d',

        markDefs: [],

        children: [
          {
            text: 'Additional Resources',

            _key: '4fed9325436a0',

            _type: 'span',

            marks: [],
          },
        ],

        _type: 'block',

        style: 'h4',
      },

      {
        listItem: 'bullet',

        markDefs: [
          {
            href: 'https://jestjs.io/docs/getting-started',

            _key: '5a1fdc4f5dda',

            _type: 'link',
          },
        ],

        children: [
          {
            _key: '7ab8d5a962560',

            _type: 'span',

            marks: ['5a1fdc4f5dda'],

            text: 'Jest Documentation',
          },
        ],

        level: 1,

        _type: 'block',

        style: 'normal',

        _key: '957e17216fb0',
      },

      {
        level: 1,

        _type: 'block',

        style: 'normal',

        _key: 'a18f07dac72a',

        listItem: 'bullet',

        markDefs: [
          {
            href: 'https://testing-library.com/docs/react-testing-library/intro/',

            _key: 'cbe38354b9be',

            _type: 'link',
          },
        ],

        children: [
          {
            _key: '92b4bfd50540',

            _type: 'span',

            marks: ['cbe38354b9be'],

            text: 'React Testing Library Documentation',
          },
        ],
      },

      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'f987beb96160',
        listItem: 'bullet',
        markDefs: [
          {
            href: 'https://www.typescriptlang.org/docs/',
            _key: '9da9558b9d46',
            _type: 'link',
          },
        ],
        children: [
          {
            _key: '896c4c95904f',
            _type: 'span',
            marks: ['9da9558b9d46'],
            text: 'TypeScript Documentation',
          },
        ],
      },
      {
        style: 'normal',
        _key: '80c52cb8336a',
        listItem: 'bullet',
        markDefs: [{ _key: '546e893e053f', _type: 'link', href: 'https://vitejs.dev/guide/' }],
        children: [
          {
            _key: '7e24b72aabf2',
            _type: 'span',
            marks: ['546e893e053f'],
            text: 'Vite Documentation',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            href: 'https://github.com/AliKdhim87/react-jest-blog',
            _key: '6483d492f3d7',
            _type: 'link',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['6483d492f3d7'],
            text: ' Repository Example',
            _key: 'a04f8c6d6432',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '1a426dcf8569',
      },
    ],
  },
};
