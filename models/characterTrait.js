module.exports = function(sequelize, DataTypes) {
    // I haven't seen characters with more than 12 traits, so this should be safe
    // Stores the ID value of the trait rather than all of the information associated with the trait
    let CharacterTrait = sequelize.define("characterTrait", {
        trait1: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait2: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait3: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait4: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait5: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait6: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait7: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait8: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait9: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait10: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait11: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        },
        trait12: {
            type: DataTypes.INT,
            validate: {
                max: 81
            }
        }
    });

    // Connect this to the Character
    CharacterTrait.associate = function(models) {
        CharacterTrait.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return CharacterTrait;
}