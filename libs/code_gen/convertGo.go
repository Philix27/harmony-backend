package code_gen

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func ConvertGoToTsProcessor(goFilePath string, tsFilePath string) error {
	// open Files
	goFile, err := os.Open(goFilePath)

	if err != nil {
		return err
	}

	defer goFile.Close()

	// tsFile, err := os.Open(tsFilePath)
	tsFile, err := os.Create(tsFilePath)

	if err != nil {
		return err
	}

	defer tsFile.Close()

	// For scanning
	scanner := bufio.NewScanner(goFile)

	// Read each line of the file
	for scanner.Scan() {
		line := scanner.Text()
		if strings.HasPrefix(line, "type") {
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

				tsFile.WriteString(fmt.Sprintf("    %s: %s;\n", fieldName, mapGoToTs(fieldType)))
			}
			tsFile.WriteString("}\n")
		}
	}
	if err := scanner.Err(); err != nil {
		return err
	}
	return nil

}

func mapGoToTs(goType string) string {
	switch goType {
	case "string":
		return "string"
	case "int", "int32", "int64", "uint", "uint32", "uint64":
		return "number"
	case "bool":
		return "bool"
	default:
		return "any"
	}
}
