package appConfig

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type DbConfig struct { 
    Host string
    Port string
    Password string
    User string
    DbName string
    SSLMode string
}

func DbNewConnection(config *DbConfig) (*gorm.DB, error)  {
    dsn := fmt.Sprintf("host=%s port=%s password=%s dbname=%s user=%s sslmode=%s", 
    config.Host, config.Port, config.Password, config.DbName, config.User, config.SSLMode)


     // ref: https://gorm.io/docs/connecting_to_the_database.html#PostgreSQL
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

    if err != nil {
        return db, err
    }

    return db, nil

      
} 