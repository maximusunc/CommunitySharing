// users table
module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		name: {
			type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,25]
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: true
				}
			},
			address1: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,100]
				}
			},
			address2: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			city: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,100]
				}
			},
			state: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2]
				}
			},
			zip: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,100]
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [2,30]
				}
			}
		});

	User.associate = function(models) {
		User.hasMany(models.Item, {
			onDelete: "CASCADE"
		});
		User.hasMany(models.Share, {
			onDelete: "CASCADE"
		});
	}
	return User;
};