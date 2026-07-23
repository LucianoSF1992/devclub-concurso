using DevClub.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace DevClub.Api.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(AppDbContext context)
    {
        var courses = await EnsureCoursesAsync(context);

        await SeedCourseModulesAsync(
            context,
            courses);

        await context.SaveChangesAsync();
    }

    private static async Task<List<Course>> EnsureCoursesAsync(
        AppDbContext context)
    {
        var courses = await context.Courses
            .ToListAsync();

        if (courses.Count > 0)
        {
            return courses;
        }

        var dotnetCourse = new Course
        {
            Title = "Fundamentos de C# e .NET",
            Description =
                "Aprenda os fundamentos da linguagem C# e da plataforma .NET para construir aplicações modernas.",
            Slug = "fundamentos-csharp-dotnet",
            ImageUrl = null,
            Level = "Iniciante",
            DurationInHours = 20,
            IsPublished = true
        };

        var aspnetCourse = new Course
        {
            Title = "Desenvolvimento Web com ASP.NET Core",
            Description =
                "Aprenda a construir APIs REST e aplicações web modernas utilizando ASP.NET Core.",
            Slug = "desenvolvimento-web-aspnet-core",
            ImageUrl = null,
            Level = "Intermediário",
            DurationInHours = 30,
            IsPublished = true
        };

        var angularCourse = new Course
        {
            Title = "Angular para Desenvolvedores .NET",
            Description =
                "Aprenda a criar aplicações frontend modernas utilizando Angular e integrá-las com APIs .NET.",
            Slug = "angular-para-desenvolvedores-dotnet",
            ImageUrl = null,
            Level = "Intermediário",
            DurationInHours = 25,
            IsPublished = true
        };

        context.Courses.AddRange(
            dotnetCourse,
            aspnetCourse,
            angularCourse);

        await context.SaveChangesAsync();

        return new List<Course>
        {
            dotnetCourse,
            aspnetCourse,
            angularCourse
        };
    }

    private static async Task SeedCourseModulesAsync(
        AppDbContext context,
        List<Course> courses)
    {
        var dotnetCourse = courses.FirstOrDefault(
            course =>
                course.Slug == "fundamentos-csharp-dotnet");

        if (dotnetCourse is not null)
        {
            await SeedDotnetModulesAsync(
                context,
                dotnetCourse);
        }

        var aspnetCourse = courses.FirstOrDefault(
            course =>
                course.Slug == "desenvolvimento-web-aspnet-core");

        if (aspnetCourse is not null)
        {
            await SeedAspnetModulesAsync(
                context,
                aspnetCourse);
        }

        var angularCourse = courses.FirstOrDefault(
            course =>
                course.Slug == "angular-para-desenvolvedores-dotnet");

        if (angularCourse is not null)
        {
            await SeedAngularModulesAsync(
                context,
                angularCourse);
        }
    }

    private static async Task SeedDotnetModulesAsync(
        AppDbContext context,
        Course course)
    {
        var hasModules = await context.CourseModules
            .AnyAsync(module =>
                module.CourseId == course.Id);

        if (hasModules)
        {
            return;
        }

        var module1 = new CourseModule
        {
            Title = "Introdução ao C#",
            Order = 1,
            CourseId = course.Id
        };

        module1.Lessons.Add(new Lesson
        {
            Title = "O que é C# e .NET?",
            Description =
                "Introdução à linguagem C# e à plataforma .NET.",
            DurationInMinutes = 30,
            Order = 1
        });

        module1.Lessons.Add(new Lesson
        {
            Title = "Variáveis e tipos de dados",
            Description =
                "Conheça os principais tipos de dados e declaração de variáveis.",
            DurationInMinutes = 45,
            Order = 2
        });

        module1.Lessons.Add(new Lesson
        {
            Title = "Orientação a objetos",
            Description =
                "Introdução aos principais conceitos de orientação a objetos.",
            DurationInMinutes = 60,
            Order = 3
        });

        var module2 = new CourseModule
        {
            Title = "Fundamentos do .NET",
            Order = 2,
            CourseId = course.Id
        };

        module2.Lessons.Add(new Lesson
        {
            Title = "Introdução ao .NET",
            Description =
                "Conheça a estrutura e os principais componentes da plataforma .NET.",
            DurationInMinutes = 45,
            Order = 1
        });

        module2.Lessons.Add(new Lesson
        {
            Title = "Projetos e soluções",
            Description =
                "Aprenda a estruturar projetos e soluções .NET.",
            DurationInMinutes = 40,
            Order = 2
        });

        context.CourseModules.AddRange(
            module1,
            module2);
    }

    private static async Task SeedAspnetModulesAsync(
        AppDbContext context,
        Course course)
    {
        var hasModules = await context.CourseModules
            .AnyAsync(module =>
                module.CourseId == course.Id);

        if (hasModules)
        {
            return;
        }

        var module1 = new CourseModule
        {
            Title = "Introdução ao ASP.NET Core",
            Order = 1,
            CourseId = course.Id
        };

        module1.Lessons.Add(new Lesson
        {
            Title = "Arquitetura do ASP.NET Core",
            Description =
                "Conheça os principais componentes do ASP.NET Core.",
            DurationInMinutes = 45,
            Order = 1
        });

        module1.Lessons.Add(new Lesson
        {
            Title = "Controllers e rotas",
            Description =
                "Aprenda a criar controllers e configurar rotas.",
            DurationInMinutes = 50,
            Order = 2
        });

        var module2 = new CourseModule
        {
            Title = "Construindo APIs REST",
            Order = 2,
            CourseId = course.Id
        };

        module2.Lessons.Add(new Lesson
        {
            Title = "Criando endpoints REST",
            Description =
                "Aprenda a criar endpoints para APIs REST.",
            DurationInMinutes = 60,
            Order = 1
        });

        module2.Lessons.Add(new Lesson
        {
            Title = "Entity Framework Core",
            Description =
                "Conheça a integração entre ASP.NET Core e Entity Framework Core.",
            DurationInMinutes = 60,
            Order = 2
        });

        context.CourseModules.AddRange(
            module1,
            module2);
    }

    private static async Task SeedAngularModulesAsync(
        AppDbContext context,
        Course course)
    {
        var hasModules = await context.CourseModules
            .AnyAsync(module =>
                module.CourseId == course.Id);

        if (hasModules)
        {
            return;
        }

        var module1 = new CourseModule
        {
            Title = "Fundamentos do Angular",
            Order = 1,
            CourseId = course.Id
        };

        module1.Lessons.Add(new Lesson
        {
            Title = "Introdução ao Angular",
            Description =
                "Conheça o framework Angular e sua estrutura.",
            DurationInMinutes = 40,
            Order = 1
        });

        module1.Lessons.Add(new Lesson
        {
            Title = "Componentes",
            Description =
                "Aprenda a criar e utilizar componentes Angular.",
            DurationInMinutes = 50,
            Order = 2
        });

        var module2 = new CourseModule
        {
            Title = "Integração com APIs",
            Order = 2,
            CourseId = course.Id
        };

        module2.Lessons.Add(new Lesson
        {
            Title = "Consumindo APIs HTTP",
            Description =
                "Aprenda a consumir APIs REST utilizando HttpClient.",
            DurationInMinutes = 60,
            Order = 1
        });

        module2.Lessons.Add(new Lesson
        {
            Title = "Autenticação com JWT",
            Description =
                "Integre autenticação JWT entre Angular e uma API .NET.",
            DurationInMinutes = 60,
            Order = 2
        });

        context.CourseModules.AddRange(
            module1,
            module2);
    }
}