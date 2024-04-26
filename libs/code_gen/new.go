package code_gen

import (
	"bufio"
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

// Function to convert Go structs to TypeScript interfaces in a codebase
func GoThroughFiles(codebasePath string, tsFilePath string) error {
	// Open the output TypeScript file
	tsFile, err := os.Create(tsFilePath)
	if err != nil {
		return err
	}
	defer tsFile.Close()

	// Walk through the directory and its subdirectories
	err = filepath.Walk(codebasePath, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if !info.IsDir() && strings.HasSuffix(path, ".dto.go") {
			// Process the Go file
			// if err := ConvertGoToTsProcessor(path, tsFilePath); err != nil {
			if err := processGoFile(path, tsFile); err != nil {
				return err
			}
		}
		return nil
	})

	if err != nil {
		return err
	}

	return nil
}

// Function to process a Go file and convert structs to TypeScript interfaces
func processGoFile(goFilePath string, tsFile *os.File) error {
	// Open the input Go file
	goFile, err := os.Open(goFilePath)
	if err != nil {
		return err
	}
	defer goFile.Close()

	// Create a scanner to read the input Go file line by line
	scanner := bufio.NewScanner(goFile)

	// Write the TypeScript interface definitions to the output file
    // Read each line of the file
	for scanner.Scan() {
		line := scanner.Text()
		if strings.HasPrefix(line, "type ") { // Check if the line defines a struct
			structName := strings.Fields(line)[1]
			tsFile.WriteString(fmt.Sprintf("\nexport interface %s {\n", structName))
			// Read each line of the struct
            for scanner.Scan() {
				line = scanner.Text()
				if line == "}" {
					break
				}
				parts := strings.Fields(line)
				fieldName := parts[0]
				fieldType := parts[1]
				tsFile.WriteString(fmt.Sprintf("    %s: %s;\n", fieldName, mapGoTypeToTsType(fieldType)))
			}
			tsFile.WriteString("}\n")
		}
	}

	if err := scanner.Err(); err != nil {
		return err
	}

	return nil
}

// Function to map Go types to TypeScript types
func mapGoTypeToTsType(goType string) string {
	switch goType {
	case "string":
		return "string"
	case "int", "int32", "int64", "uint", "uint32", "uint64":
		return "number"
	case "float32", "float64":
		return "number"
	default:
		return goType
	}
}
