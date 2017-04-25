OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "清除映射失败。",
    "Failed to delete the server configuration" : "未能删除服务器配置",
    "The configuration is invalid: anonymous bind is not allowed." : "配置无效：不允许匿名绑定。",
    "The configuration is valid and the connection could be established!" : "配置有效，能够建立连接！",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "配置有效但绑定失败。请检查服务器设置和认证信息。",
    "The configuration is invalid. Please have a look at the logs for further details." : "配置无效。更多细节请查看 ownCloud 日志。",
    "No action specified" : "未指定操作",
    "No configuration specified" : "未指定配置文件",
    "No data specified" : "未指定数据",
    " Could not set configuration %s" : " 无法设定配置文件 %s",
    "Action does not exist" : "操作不存在",
    "The Base DN appears to be wrong" : "Base DN似乎错了",
    "Testing configuration…" : "测试配置...",
    "Configuration incorrect" : "配置错误",
    "Configuration incomplete" : "配置未完成",
    "Configuration OK" : "配置完成",
    "Select groups" : "选择分组",
    "Select object classes" : "选择对象类型",
    "Please check the credentials, they seem to be wrong." : "凭据错误，请检查凭据。",
    "Please specify the port, it could not be auto-detected." : "无法自动识别，请指定一个端口。",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "无法自动识别DN，请检查凭证，主机和端口。",
    "Could not detect Base DN, please enter it manually." : "无法探测Base DN，请手动输入。",
    "{nthServer}. Server" : "{nthServer}. 服务器",
    "No object found in the given Base DN. Please revise." : "基础DN中未能找到指定对象，请检查。",
    "More than 1,000 directory entries available." : "超过1000个可用目录条目。",
    " entries available within the provided Base DN" : "基础DN中的可用条目",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "发生错误。请检查基本DN，以及连接设置和凭据。",
    "Do you really want to delete the current Server Configuration?" : "您真的想要删除当前服务器配置吗？",
    "Confirm Deletion" : "确认删除",
    "Mappings cleared successfully!" : "映射清除成功！",
    "Error while clearing the mappings." : "清除映射时发生错误。",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "禁止匿名绑定。请提供有效的用户DN和密码。",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP操作错误。匿名绑定可能不会被允许。",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "保存失败。请确保数据库正在运行。继续前将重新载入。",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "切换模式将启用自动LDAP查询。根据您的LDAP规模，可能需要一段时间。是否继续切换模式？",
    "Mode switch" : "切换模式",
    "Select attributes" : "选择属性",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "找不到用户。请检查您的登录属性和用户名。有效过滤（复制和粘贴命令行验证）：",
    "User found and settings verified." : "用户已找到，设置已验证。",
    "Settings verified, but more than one user found. Only the first will be able to login. Consider a more narrow filter." : "已验证设置，但找到了多个用户。 只有第一个用户能登录。 请您考虑使用一个更小的过滤范围。",
    "An unspecified error occurred. Please check the settings and the log." : "发生未指定的错误。请检查设置和日志。",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "搜索的筛选条件无效，可能是由于不完全开闭括号的句法的问题，请检查。",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "LDAP/ AD连接错误，请检查主机，端口和凭证。",
    "Please provide a login name to test against" : "请提供登录名以测试",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "该组框被禁用，因为LDAP/ AD服务器不支持memberOf。",
    "Password change rejected. Hint: " : "密码更改出错。提示：",
    "LDAP / AD integration" : "LDAP / AD 整合",
    "_%s group found_::_%s groups found_" : ["发现 %s 个群组"],
    "_%s user found_::_%s users found_" : ["发现 %s 个用户"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "无法检测到用户的显示名称属性。请在高级LDAP设置中指定。",
    "Could not find the desired feature" : "无法找到所需的功能",
    "Invalid Host" : "无效的主机",
    "Test Configuration" : "测试配置",
    "Help" : "帮助",
    "Groups meeting these criteria are available in %s:" : "满足这些条件组在%s可供选择：",
    "Only these object classes:" : "只有这些对象类：",
    "Only from these groups:" : "仅从这些组：",
    "Search groups" : "搜索分组",
    "Available groups" : "可选分组",
    "Selected groups" : "已选分组",
    "Edit LDAP Query" : "编辑LDAP查询",
    "LDAP Filter:" : "LDAP筛选:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "该筛选条件指定哪些LDAP组有权访问%s的实例。",
    "When logging in, %s will find the user based on the following attributes:" : "登录时,%s将查找基于以下属性的用户：",
    "LDAP / AD Username:" : "LDAP/AD用户名:",
    "LDAP / AD Email Address:" : "LDAP/AD邮箱地址：",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "允许email属性登录。邮件和邮件主地址将被允许。",
    "Other Attributes:" : "其他属性：",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "当尝试登录时定义应用的过滤器。 %%uid替换登录操作的用户名。例如：“uid =%%uid”",
    "Test Loginname" : "测试登录名",
    "Verify settings" : "验证设置",
    "1. Server" : "1.服务器",
    "%s. Server:" : "%s.服务器",
    "Copy current configuration into new directory binding" : "当前配置复制到新目录",
    "Delete the current configuration" : "删除当前配置",
    "Host" : "主机",
    "Port" : "端口",
    "Detect Port" : "检测端口",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "客户端使用的DN必须与绑定的相同，比如uid=agent,dc=example,dc=com\n如需匿名访问，将DN和密码保留为空",
    "Password" : "密码",
    "For anonymous access, leave DN and Password empty." : "启用匿名访问，将DN和密码保留为空",
    "One Base DN per line" : "每行一个基本判别名",
    "You can specify Base DN for users and groups in the Advanced tab" : "您可以在高级选项卡里为用户和组指定Base DN",
    "Detect Base DN" : "检测基础DN",
    "Test Base DN" : "测试基础DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "避免自动LDAP请求。用于更精确的设置，但需要一些LDAP知识。",
    "Manually enter LDAP filters (recommended for large directories)" : "手动输入LDAP筛选条件(建议用于大型目录)",
    "Listing and searching for users is constrained by these criteria:" : "列表搜索用户受到标准约束:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "对于用户最常用的对象类为organizationalPerson，person，user和inetOrgPerson。如果你不确定选择哪些对象类，请咨询您的目录管理员。",
    "The filter specifies which LDAP users shall have access to the %s instance." : "该筛选条件指定哪些LDAP用户有权访问%s的实例。",
    "Verify settings and count users" : "验证设置和统计用户",
    "Saving" : "保存中",
    "Back" : "返回",
    "Continue" : "继续",
    "LDAP" : "LDAP",
    "Server" : "服务器",
    "Users" : "用户",
    "Login Attributes" : "登录属性",
    "Groups" : "群组",
    "Expert" : "专家",
    "Advanced" : "高级",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>警告：</b> 应用 user_ldap 和 user_webdavauth 之间不兼容。您可能遭遇未预料的行为。请让系统管理员禁用其中一个。",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>警告：</b> PHP LDAP 模块未安装，后端将无法工作。请请求您的系统管理员安装该模块。",
    "Connection Settings" : "连接设置",
    "Configuration Active" : "现行配置",
    "When unchecked, this configuration will be skipped." : "当反选后，此配置将被忽略。",
    "Backup (Replica) Host" : "备份 (镜像) 主机",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "给出一个可选的备份主机。它必须为主 LDAP/AD 服务器的一个镜像。",
    "Backup (Replica) Port" : "备份 (镜像) 端口",
    "Disable Main Server" : "禁用主服务器",
    "Only connect to the replica server." : "只能连接到复制服务器",
    "Turn off SSL certificate validation." : "关闭SSL证书验证",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "不推荐，只用于测试！如果连接只使用此选项工作，导入您的%s服务器LDAP服务器的SSL证书。",
    "Cache Time-To-Live" : "缓存存活时间",
    "in seconds. A change empties the cache." : "以秒计。修改将清空缓存。",
    "Directory Settings" : "目录设置",
    "User Display Name Field" : "用户显示名称字段",
    "The LDAP attribute to use to generate the user's display name." : "用来生成用户的显示名称的 LDAP 属性。",
    "2nd User Display Name Field" : "第二用户显示名称字段",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "可选项。LDAP属性被添加到显示名称的括号内。例如»John Doe (john.doe@example.org)«。",
    "Base User Tree" : "基础用户树",
    "One User Base DN per line" : "每行一个用户基准判别名",
    "User Search Attributes" : "用户搜索属性",
    "Optional; one attribute per line" : "可选;每行一个属性",
    "Group Display Name Field" : "组显示名称字段",
    "The LDAP attribute to use to generate the groups's display name." : "用来生成组的显示名称的 LDAP 属性。",
    "Base Group Tree" : "基础组树",
    "One Group Base DN per line" : "每行一个群组基准判别名",
    "Group Search Attributes" : "群组搜索属性",
    "Group-Member association" : "组成员关联",
    "Dynamic Group Member URL" : "动态组成员URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "LDAP组对象属性，包含用于确定属于该组对象的LDAP搜索URL。(空设置禁用动态组成员的功能。)",
    "Nested Groups" : "嵌套组",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "当选择后，包含组的组将启用。(只有当组成员属性包含DNs时有效。)",
    "Paging chunksize" : "页块大小",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "用于在LDAP搜索返回如用户或组枚举结果时进行分页显示。 (设置它为0时，禁止在这些情况下分页LDAP搜索。)",
    "Enable LDAP password changes per user" : "每个用户可以更改 LDAP 密码",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "允许LDAP用户更改其密码，并允许超级管理员和组管理员更改LDAP用户的密码。 仅在LDAP服务器上相应配置访问控制策略时有效。 由于密码以纯文本形式发送到LDAP服务器，因此必须使用传输加密，并在LDAP服务器上配置散列密码。",
    "(New password is sent as plain text to LDAP)" : "(新的密码将以纯文本形式发送到 LDAP)",
    "Special Attributes" : "特殊属性",
    "Quota Field" : "配额字段",
    "Quota Default" : "默认配额",
    "Email Field" : "电邮字段",
    "User Home Folder Naming Rule" : "用户主目录命名规则",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "指定一个 LDAP/AD 属性。留空，则使用用户名称（默认）。",
    "Internal Username" : "内部用户名",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "默认情况下将从UUID属性创建内部用户名。将确保用户名是唯一的字符，并且不需要转换。 内部用户名，只允许使用这些字符：[a-zA-Z0-9 _。@ - ]。 其他字符被替换为它们的ASCII对应或简单地被忽略。如果出现重复，将添加或增加一个数字。 内部用户名用于在内部标识用户。 它是用户主文件夹的默认名称。 它也是远程URL的一部分，例如对于所有* DAV 服务。 使用此设置，可以覆盖默认行为。 默认行为为空， 则更改只会对新映射 (已添加) 的LDAP用户有效。",
    "Internal Username Attribute:" : "内部用户名属性：",
    "Override UUID detection" : "超越UUID检测",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "ownCloud 默认会自动检测 UUID 属性。UUID 属性用来无误地识别 LDAP 用户和组。同时，如果上面没有特别设置，内部用户名也基于 UUID 创建。也可以覆盖设置，直接指定一个属性。但一定要确保指定的属性取得的用户和组是唯一的。留空，则执行默认操作。更改只影响新映射 (或增加) 的 LDAP 用户和组。",
    "UUID Attribute for Users:" : "用户UUID属性：",
    "UUID Attribute for Groups:" : "组的UUID属性:",
    "Username-LDAP User Mapping" : "用户名-LDAP用户映射",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "用户名用于存储和分配数据 (元)。为了准确地识别和确认用户，每个用户都有一个内部用户名。这需要一个 ownCloud 用户名到 LDAP 用户的映射。创建的用户名被映射到 LDAP 用户的 UUID。此外，DN 也会被缓存，以减少 LDAP 连接，但它不用于识别。DN 的变化会被监视到。内部用户名会被用于所有地方。清除映射将导致一片混乱。清除映射不是常用的设置，它会影响到所有的 LDAP 配置！千万不要在正式环境中清除映射，只有在测试或试验时才这样做。",
    "Clear Username-LDAP User Mapping" : "清除用户-LDAP用户映射",
    "Clear Groupname-LDAP Group Mapping" : "清除组用户-LDAP级映射",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "该%uid占位符缺失。它将在LDAP/ AD登录名查询时进行替换。",
    "Verify settings and count groups" : "验证设置和统计组",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "允许是能被检测到的UID或SAM帐户LDAP/ AD用户名登录。",
    "Add a new and blank configuration" : "添加一个新的空白配置",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "可以忽略协议，但如要使用SSL，则需以ldaps://开头",
    "in bytes" : "字节数"
},
"nplurals=1; plural=0;");
