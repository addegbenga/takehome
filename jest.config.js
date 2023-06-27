export default {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust the path to match your source code directory
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
