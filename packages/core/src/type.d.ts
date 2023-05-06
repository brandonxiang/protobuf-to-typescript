interface OptionType {
  isDefinition?: boolean;
  inputDir?: string;
  outputDir?: string;
}

type ServiceInfo = {
  [key: string]: {
    name: string;
    fullName: string;
    dir: string;
    description: string;
    methods: string[];
  };
};
