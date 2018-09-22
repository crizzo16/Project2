module.exports = function (sequelize, DataTypes) {
    // all variables are formatted as such:
    // "attr" + abbreviated attribute name + "Max" for their max value
    // "attr" + abbreviated attribute name + "Curr" for their current value
    // This will be the same when they first create the character
    // Players can only create characters with a value from 1 to 6
    var CharacterAttr = sequelize.define("CharacterAttr", {
        attrAwMax: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrAwCurr: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrCoMax: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrCoCurr: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrInMax: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrInCurr: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrPrMax: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrPrCurr: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrReMax: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrReCurr: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrStMax: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        },
        attrStCurr: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 1,
                max: 6
            }
        }
    });


    // Associate this model with the Character Model
    CharacterAttr.associate = function (models) {
        CharacterAttr.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return CharacterAttr;
};